import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Button from 'react-bootstrap';

const SpeechToText = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <React.Fragment>
      <div>
        <Button onClick={SpeechRecognition.startListening}>Start</Button>
        <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
        <Button onClick={resetTranscript}>Reset</Button>
        <p>{transcript}</p>
      </div>
    </React.Fragment>
  )
}
export default SpeechToText;