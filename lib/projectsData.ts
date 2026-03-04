export interface Project {
    id: number;
    name: string;
    tagline: string;
    problem?: string;
    solution: string;
    techStack: string[];
    features: string[];
    challenges?: string[];
    result?: string;
    impact?: string;
    achievement?: string;
    architecture?: string;
    githubUrl?: string;
    liveUrl?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        name: "Plant Disease Detection System",
        tagline: "AI-powered system that detects plant diseases from leaf images using Deep Learning.",
        problem: "Farmers often fail to detect plant diseases at early stages, leading to major crop loss.",
        solution: "Built a Convolutional Neural Network (CNN) model trained on plant leaf datasets to classify diseases and provide instant predictions through a web interface.",
        techStack: ["Python", "TensorFlow/Keras", "OpenCV", "Streamlit", "NumPy", "Pandas"],
        features: [
            "Image upload & real-time disease prediction",
            "90%+ classification accuracy",
            "Clean and simple UI",
            "Disease information & treatment suggestions"
        ],
        challenges: [
            "Improving model accuracy",
            "Handling image preprocessing",
            "Avoiding overfitting"
        ],
        result: "Successfully deployed on Streamlit Cloud with fast prediction response.",
        githubUrl: "https://github.com/ADITYA-ROUTH/plant-disease-detector",
        liveUrl: "https://plant-disease-detector-aditya.streamlit.app"
    },
    {
        id: 2,
        name: "ShortsPilot",
        tagline: "AI-powered platform to generate and schedule short-form videos automatically.",
        problem: "Content creators spend hours editing and scheduling short videos.",
        solution: "Developed an AI-based automation system that generates short videos and allows scheduling posts on YouTube & Instagram.",
        techStack: ["Next.js", "MongoDB", "ImageKit", "AI APIs", "REST APIs"],
        features: [
            "AI-generated short videos",
            "Video scheduling system",
            "Media optimization using ImageKit",
            "Backend integration with database"
        ],
        architecture: "Frontend (Next.js) → Backend APIs → AI Processing → MongoDB → Media Storage → Scheduler",
        impact: "Reduced manual content creation time significantly."
    },
    {
        id: 3,
        name: "Women Safety App",
        tagline: "Real-time emergency safety application for women.",
        achievement: "2nd Runner Up – JIS College Hackathon",
        solution: "Built an application that allows users to send instant SOS alerts with live location tracking.",
        techStack: ["Android / Java", "Firebase", "GPS APIs"],
        features: [
            "One-tap emergency alert",
            "Live location sharing",
            "Real-time database integration",
            "Emergency contact system"
        ],
        impact: "Focused on solving real-world safety concerns using mobile technology.",
        githubUrl: "https://github.com/ADITYA-ROUTH/hackthone"
    },
    {
        id: 4,
        name: "Hand Gesture Detection",
        tagline: "Real-time hand gesture recognition using computer vision and deep learning.",
        problem: "Traditional input methods limit accessibility and hands-free interaction with devices.",
        solution: "Built a real-time hand tracking and gesture recognition system using OpenCV and MediaPipe, deployed as a web app via Streamlit with live webcam support.",
        techStack: ["Python", "OpenCV", "MediaPipe", "Streamlit", "CVZone"],
        features: [
            "Real-time hand tracking via webcam",
            "Multi-gesture recognition",
            "Live web deployment with Streamlit",
            "STUN server config for cloud deployment"
        ],
        challenges: [
            "WebRTC streaming in cloud environments",
            "Optimizing detection latency",
            "Cross-browser webcam compatibility"
        ],
        architecture: "Webcam Feed → MediaPipe Hand Tracking → Gesture Classifier → Streamlit UI → WebRTC Stream",
        result: "Deployed on Streamlit Cloud with real-time gesture detection and low latency.",
        githubUrl: "https://github.com/ADITYA-ROUTH/Hand-Gesture-Detection"
    }
];
