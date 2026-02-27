// SurakshaAI — Tesseract.js OCR Engine Wrapper
import { createWorker } from 'tesseract.js';

let worker = null;

export async function initOCR(onProgress) {
    if (worker) return worker;

    worker = await createWorker('eng', 1, {
        logger: (m) => {
            if (onProgress && m.status === 'recognizing text') {
                onProgress(Math.round(m.progress * 100));
            }
        },
    });

    return worker;
}

export async function extractText(imageSource, onProgress) {
    try {
        const w = await initOCR(onProgress);
        const { data } = await w.recognize(imageSource);

        return {
            text: data.text,
            confidence: data.confidence,
            words: data.words?.map((word) => ({
                text: word.text,
                confidence: word.confidence,
                bbox: word.bbox,
            })) || [],
        };
    } catch (error) {
        console.error('OCR Error:', error);
        throw new Error('Failed to extract text from image. Please try a clearer screenshot.');
    }
}

export async function terminateOCR() {
    if (worker) {
        await worker.terminate();
        worker = null;
    }
}
