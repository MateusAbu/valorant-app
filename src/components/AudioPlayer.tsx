import React, { useEffect, useState } from 'react'

interface AudioPlayerProps {
    audioUrl: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
    const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null)

    useEffect(() => {
        const fetchAudioData = async () => {
            try {
                const response = await fetch(audioUrl)
                const arrayBuffer = await response.arrayBuffer()
                const audioContext = new AudioContext()
                const decodedData = await audioContext.decodeAudioData(arrayBuffer)
                setAudioBuffer(decodedData)
            } catch (error) {
                console.error('Erro ao carregar o arquivo de áudio:', error)
            }
        }

        fetchAudioData()
    }, [audioUrl])

    useEffect(() => {
        if (audioBuffer) {
            const audioContext = new AudioContext()
            const source = audioContext.createBufferSource()
            source.buffer = audioBuffer
            source.connect(audioContext.destination)
            source.start()
        }
    }, [audioBuffer])

    return (
        <div>

        </div>
    )
}

export default AudioPlayer
