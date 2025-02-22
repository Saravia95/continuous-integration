import React, { useEffect, useRef } from "react";

const AudioAnalyzer = ({
  audioFilePath,
  sfxFilePath,
  onAudioData,
  mute,
  muteSfx,
}) => {
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const sourceRef = useRef(null);
  const sfxAudioContextRef = useRef(null);
  const sfxSourceRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  const audioBufferRef = useRef(null); // To store the decoded audio buffer

  useEffect(() => {
    if (!audioFilePath) return; // Don't proceed if no audio path

    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    audioContextRef.current = audioContext;

    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;

    fetch(audioFilePath)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        if (!audioContextRef.current) return; // Ensure context is still valid
        return audioContextRef.current.decodeAudioData(arrayBuffer);
      })
      .then((audioBuffer) => {
        if (!audioContextRef.current) return; // Ensure context is still valid
        audioBufferRef.current = audioBuffer; // Store the decoded audio buffer
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(analyser);
        analyser.connect(audioContextRef.current.destination); // Connect to destination to play audio
        sourceRef.current = source;

        const getAudioData = () => {
          if (audioContextRef.current && analyserRef.current) {
            analyserRef.current.getByteFrequencyData(dataArrayRef.current);
            onAudioData(dataArrayRef.current);
            //console.log("Audio Data: ", dataArrayRef.current);
            animationFrameIdRef.current = requestAnimationFrame(getAudioData);
          }
        };

        getAudioData(); // Start the audio data analysis loop
      })
      .catch((err) => {
        console.error("Error fetching or decoding audio file: ", err);
      });

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [audioFilePath]);

  useEffect(() => {
    if (audioBufferRef.current && audioContextRef.current) {
      if (mute) {
        try {
          if (sourceRef.current) {
            sourceRef.current.stop();
            sourceRef.current = null;
          }
        } catch (e) {
          console.warn("Failed to stop audio source: ", e);
        }
      } else {
        try {
          const source = audioContextRef.current.createBufferSource();
          source.buffer = audioBufferRef.current;
          source.connect(analyserRef.current);
          analyserRef.current.connect(audioContextRef.current.destination);
          source.start(0);
          sourceRef.current = source;
        } catch (e) {
          console.warn("Failed to start audio source: ", e);
        }
      }
    }
  }, [mute]);

  useEffect(() => {
    if (sfxFilePath) {
      const sfxAudioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      sfxAudioContextRef.current = sfxAudioContext;

      fetch(sfxFilePath)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => {
          if (!sfxAudioContextRef.current) return; // Ensure context is still valid
          return sfxAudioContext.decodeAudioData(arrayBuffer);
        })
        .then((audioBuffer) => {
          if (!sfxAudioContextRef.current) return; // Ensure context is still valid
          const sfxSource = sfxAudioContext.createBufferSource();
          sfxSource.buffer = audioBuffer;
          if (!muteSfx) {
            sfxSource.connect(sfxAudioContext.destination); // Connect to destination to play SFX
          }
          sfxSource.start(0);
          sfxSourceRef.current = sfxSource;
        })
        .catch((err) => {
          console.error("Error fetching or decoding SFX file: ", err);
        });

      return () => {
        if (sfxAudioContextRef.current) {
          sfxAudioContextRef.current.close();
          sfxAudioContextRef.current = null;
        }
      };
    }
  }, [sfxFilePath]);

  useEffect(() => {
    if (sfxSourceRef.current && sfxAudioContextRef.current) {
      if (muteSfx) {
        try {
          sfxSourceRef.current.disconnect();
        } catch (e) {
          console.warn("Failed to disconnect SFX source: ", e);
        }
      } else {
        try {
          sfxSourceRef.current.connect(sfxAudioContextRef.current.destination);
        } catch (e) {
          console.warn("Failed to connect SFX source: ", e);
        }
      }
    }
  }, [muteSfx]);

  return null;
};

export default AudioAnalyzer;
