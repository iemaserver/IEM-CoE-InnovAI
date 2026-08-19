/* Publication record for the InnovAI Centre of Excellence, compiled from the
   two CoE progress reports:
     - "IEDC-CSE InnovAI Report", A.Y. 2023-24        -> source: "2023-24 report"
     - "Half-Yearly Progress Report", November 2025   -> source: "2025 half-yearly"

   Venue, indexing and status are recorded exactly as they appear in the source
   documents, so this list stays auditable against the originals.

   `evidenceUrl` holds the Google Drive supporting-document links extracted from
   the 2023-24 report. They are deliberately NOT rendered: every one currently
   resolves to a Google sign-in wall rather than a public file, so publishing
   them would hand visitors a dead end. Share those Drive files publicly (or
   supply DOIs) and flip SHOW_EVIDENCE_LINKS to true to switch them on. */
export const SHOW_EVIDENCE_LINKS = false;

const DRIVE = {
  yolo: "https://drive.google.com/drive/u/0/folders/1SqKxxKgK6hNItOtg2xtozVGtHribYSF7",
  segmentation: "https://drive.google.com/file/d/18yQ80uncroOAJKdOTEkyK8nPy7Fb3era/view",
  modis: "https://drive.google.com/file/d/16vj18ZkCP5RnRnvK0m3rjxVMskDBLwKQ/view",
  fractal: "https://drive.google.com/file/d/1uijrtUjdALmcGQfqGOm4QE-kP3JlAKEk/view",
  mangrove: "https://drive.google.com/file/d/1rQwvDhS-TncPhaomsrfRtJzwAQMjnFFi/view",
  hyperspectral: "https://drive.google.com/file/d/1ZDRfj-vN3090sTq-Up3MTe7lfyj2lNEd/view",
};

const ADB = "Anindita Das Bhattacharjee";
const MS = "Moutushi Singh";
const SM = "Sukanya Mukherjee";
const REPORT_2024 = "2023-24 report";
const REPORT_2025 = "2025 half-yearly";

export const publications = [
  {
    faculty: ADB,
    title: "Advanced Aerial Object Detection using Enhanced YOLOv3 with Leaky ReLU and Dilated Convolutions",
    authors: "Anindita Das Bhattacharjee, Debdeep Nag, Deepsubhra Guha Roy, Dimitrios A. Karras",
    venue: "Conference proceedings",
    category: "Conference", index: "Scopus", year: "2024", status: "Published",
    source: REPORT_2024, evidenceUrl: DRIVE.yolo,
  },
  {
    faculty: ADB,
    title: "Advanced Deep Learning Architectures for Remote Sensing-based Segmentation",
    authors: "Anindita Das Bhattacharjee, Debayudh Mitra, Nibedan Banerjee, Srijita Sarkar",
    venue: "Conference proceedings",
    category: "Conference", index: "Scopus", year: "2024", status: "Published",
    source: REPORT_2024, evidenceUrl: DRIVE.segmentation,
  },
  {
    faculty: ADB,
    title: "Spatial-Spectral Analysis of Hyperspectral Imagery with Multilevel Thresholding and MultiOTSU Segmentation",
    authors: "Anindita Das Bhattacharjee, Srijita Sarkar, Snehil Dey",
    venue: "Conference proceedings",
    category: "Conference", index: "Scopus", year: "2024", status: "Published",
    source: REPORT_2024, evidenceUrl: DRIVE.segmentation,
  },
  {
    faculty: ADB,
    title: "Temporal Dynamics of Arid Savannas and Mangroves with MODIS Time Series Analysis",
    authors: "Anindita Das Bhattacharjee, Arpan Basu, Aveepsa Sarkar, Anoushka Sen",
    venue: "Conference proceedings",
    category: "Conference", index: "Scopus", year: "2024", status: "Published",
    source: REPORT_2024, evidenceUrl: DRIVE.modis,
  },
  {
    faculty: ADB,
    title: "Survey on Contemporary Trends in Circuit-Based Fractal Computation",
    authors: "Anindita Das Bhattacharjee, Somdatta Chakravortty",
    venue: "Conference proceedings",
    category: "Conference", index: "Scopus", year: "2024", status: "Published",
    source: REPORT_2024, evidenceUrl: DRIVE.fractal,
  },
  {
    faculty: ADB,
    title: "Survey on Circuit-Based Fractal Computation",
    authors: "Anindita Das Bhattacharjee, Alivia Nandi, Patatri Acharya, Debarati Das",
    venue: "Conference proceedings",
    category: "Conference", index: "Scopus", year: "2024", status: "Published",
    source: REPORT_2024, evidenceUrl: DRIVE.fractal,
  },
  {
    faculty: ADB,
    title: "Exploring Mangrove Complexity with Gate-Based Fractal Analysis Through AND Circuitry",
    authors: "Anindita Das Bhattacharjee, Somdatta Chakravortty, Veena Venugopal, Sumedha Basu, Debi Majumdar",
    venue: "Conference proceedings",
    category: "Conference", index: "Scopus", year: "2024", status: "Published",
    source: REPORT_2024, evidenceUrl: DRIVE.mangrove,
  },
  {
    faculty: ADB,
    title: "Enhancing Spatial-Spectral Analysis of Hyperspectral and Multispectral Satellite Imagery with Multilevel Thresholding and MultiOTSU Segmentation",
    authors: "Anindita Das Bhattacharjee, Srijita Sarkar, Snehil Dey",
    venue: "Book chapter",
    category: "Book Chapter", index: "Scopus", year: "2024", status: "Published",
    source: REPORT_2024, evidenceUrl: DRIVE.hyperspectral,
  },
  {
    faculty: ADB,
    title: "Reshaping healthcare: Exploration of a deep-learning approach for blood cell classification",
    authors: "A. Das Bhattacharjee, A. K. Sharma",
    venue: "Advancing Science and Innovation in Healthcare Research: Health Horizons (Elsevier)",
    category: "Book Chapter", index: "Scopus", year: "2025", status: "Published",
    source: REPORT_2025,
  },
  {
    faculty: ADB,
    title: "Exploring Terrestrial and Coastal Ecosystems with MODIS Time Series Data",
    authors: "Anindita Das Bhattacharjee, Arpan Basu, Aveepsa Sarkar, Anoushka Sen",
    venue: "Computational Intelligence-Based Hyperspectral Image Analysis (Springer Book Series)",
    category: "Book Chapter", index: "Scopus", year: "2025", status: "Published",
    source: REPORT_2025,
  },
  {
    faculty: ADB,
    title: "Hybrid CatBoost-Based Few-Shot Learning Model for Interclass Classification in Hyperspectral Images",
    authors: "Ushneesh Chattopadhyay, Anindita Das Bhattacharjee, Debashish Chakravarty",
    venue: "Journal of Applied Remote Sensing",
    category: "Journal", index: "SCIE", year: "2025", status: "Accepted",
    source: REPORT_2025, highlight: "First SCI collaboration with IIT Kharagpur",
  },
  {
    faculty: MS,
    title: "A Secure Blockchain-based Food Recommendation Framework Using QR Mechanism",
    authors: "Puja Das, Chitra Jain, Ansul, Moutushi Singh",
    venue: "3rd International Conference on Data, Electronics and Computing (ICDEC 2024)",
    category: "Conference", index: "Scopus", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "Blockchain-Based Skin Cancer Detection: Enhancing Accuracy and Security with DHETL",
    authors: "P. Das, C. Jain, Ansul, M. Singh",
    venue: "Human-Centric Smart Computing, ICHCSC 2024 - Smart Innovation, Systems and Technologies vol. 440 (Springer, Singapore)",
    category: "Conference", index: "Scopus", year: "2025", status: "Published",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "Decentralized Parkinson\u2019s Disease Detection Using Integrating Blockchain and Federated Learning for Healthcare",
    authors: "Puja Das, Chitra Jain, Ansul, Moutushi Singh",
    venue: "Interdisciplinary Research in Technology & Management (IRTM 2024)",
    category: "Conference", index: "Scopus", year: "2025", status: "Accepted and presented",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "Advancing Thalassemia Diagnosis: Integrating IoMT and Federated Learning for Enhanced Detection",
    authors: "Puja Das, Moutushi Singh",
    venue: "3rd International Conference on Advanced Communication and Intelligent Systems",
    category: "Conference", index: "Scopus", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "Resilience of Cyber-Physical Systems: Hybrid Multi-Stage Attack Simulations and Defense Strategies",
    authors: "Swagatam Adak, Moutushi Singh",
    venue: "IEM-ICDC 2025 - International Conference on Computational Intelligence, Data Science and Cloud Computing",
    category: "Conference", index: "Scopus", year: "2025", status: "Published",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "BlockTwin: Securing Privacy of Digital Twins using Blockchain for Industry 4.0",
    authors: "Puja Das, Chitra Jain, Ansul Singh, Moutushi Singh",
    venue: "IEM-ICDC 2025",
    category: "Conference", index: "Scopus", year: "2025", status: "Published",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "Fast Flux Network-Based Detection of Malicious DNS Domains",
    authors: "Sucheta Chandra, Moutushi Singh, Malay Gangopadhyaya",
    venue: "IEM-ICDC 2025",
    category: "Conference", index: "Scopus", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "DNS Traffic Monitoring: Waveform Analysis for Detecting Suspicious Activity",
    authors: "Sucheta Chandra, Moutushi Singh, Malay Gangopadhyaya",
    venue: "IEM-ICDC 2025",
    category: "Conference", index: "Scopus", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "Intelligent Anomaly Detection with Federated Learning and Digital Twin",
    authors: "Kajari Sur, Rupayan Das, Moutushi Singh",
    venue: "IEM-ICDC 2025",
    category: "Conference", index: "Scopus", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "Clustering of Large Human Protein Sequences Using Spark Based Hierarchical Clustering Approach",
    authors: "Subhadip Paul, Utsho Banerjee, Moutushi Singh, Soumyendu Sekhar Bandyopadhyay, Kaustav Sengupta",
    venue: "IEM-ICDC 2025",
    category: "Conference", index: "Scopus", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "e-KYC SecureChain: Transforming KYC System with Blockchain for Enhanced Customer Authentication",
    authors: "Moutushi Singh et al.",
    venue: "NCRAET",
    category: "Conference", index: "Scopus", year: "2025", status: "Communicated",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "DeNome: A Decentralized Architecture to Ensure Data Privacy in Sharing of Genomic Data",
    authors: "P. Das, C. Jain, Ansul, M. Singh",
    venue: "Intelligent Human Centered Computing, HUMAN 2024 - Springer Tracts in Human-Centered Computing (Springer, Singapore)",
    category: "Journal", index: "SCI", year: "2025", status: "Accepted",
    source: REPORT_2025, doi: "https://doi.org/10.1007/978-981-96-1761-6_12",
  },
  {
    faculty: MS,
    title: "An Innovative Deep Learning-Based Approach for Classifying Ayurveda Medicinal Plants",
    authors: "Puja Das, Rakhi Bhardwaj, Moutushi Singh",
    venue: "Modern Approaches in Identification and Therapeutic Applications of Secondary Metabolites, Volume 2 - Chapter 2 (ISBN 9781779642349)",
    category: "Book Chapter", index: "SCI", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "Quantum-Resilient Blockchain Framework for Privacy-Preserving Genomic Data Sharing and Analysis",
    authors: "Puja Das, Chitra Jain, Abdullah M. AlShahrani, Moutushi Singh, Md. Zeyaullah, Hytham Hummad",
    venue: "Journal of Information Security and Applications",
    category: "Journal", index: "SCI", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: MS,
    title: "Intelligent IoT-enabled healthcare solutions implementing federated meta-learning with blockchain",
    authors: "Puja Das, Naresh Kumar, Chitra Jain, Anshul, Moutushi Singh",
    venue: "Journal of Industrial Information Integration",
    category: "Journal", index: "SCI", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: SM,
    title: "Nonlinearity in Large-Cycle Cellular Automata",
    authors: "Sukanya Mukherjee, Sumit Adak",
    venue: "Complex Systems",
    category: "Journal", index: "ESCI", year: "2025", status: "Published",
    source: REPORT_2025,
  },
  {
    faculty: SM,
    title: "Isomorphic Classification of First Degree Cellular Automata",
    authors: "Vicky Vikrant, Kamalika Bhattacharjee, Sukanya Mukherjee",
    venue: "Complex Systems",
    category: "Journal", index: "ESCI", year: "2025", status: "Published",
    source: REPORT_2025,
  },
  {
    faculty: SM,
    title: "Use of Asynchronous Cellular Automata in Clustering Problem",
    authors: "Souvik Roy, Virendra Kumar Gautam, Sukanya Mukherjee",
    venue: "Journal of Cellular Automata",
    category: "Journal", index: "SCIE", year: "2025", status: "Accepted",
    source: REPORT_2025,
  },
  {
    faculty: SM,
    title: "Use of 5-Neighborhood Cellular Automata for Pattern Classification",
    authors: "Sukanya Mukherjee, Priya Kumari",
    venue: "ASCAT 2025",
    category: "Conference", index: "Scopus", year: "2025", status: "Published",
    source: REPORT_2025,
  },
  {
    faculty: SM,
    title: "Search of 3-State Cellular Automata for Clustering",
    authors: "Sukanya Mukherjee, Arka Prabha Acharyya",
    venue: "ASCAT 2025",
    category: "Conference", index: "Scopus", year: "2025", status: "Published",
    source: REPORT_2025,
  },
];

/* Derived, so the headline figures can never drift from the list itself. */
export const publicationSummary = {
  total: publications.length,
  byIndex: publications.reduce((acc, p) => ({ ...acc, [p.index]: (acc[p.index] || 0) + 1 }), {}),
  byCategory: publications.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }), {}),
  faculty: [...new Set(publications.map((p) => p.faculty))],
};
