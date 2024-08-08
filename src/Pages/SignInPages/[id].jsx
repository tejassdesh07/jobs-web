import React, { useState,  useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCaretDown } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoMdArrowBack, IoMdDownload } from 'react-icons/io';
import { FaExternalLinkAlt } from 'react-icons/fa';

const candidates = [

  {
    id: 1,
    name: "Katherine Feng",
    slug: "katherine-feng",
    date: "July 28, 2024",
    status: "Pending",
    details: "Detailed information about Katherine Feng.",
    questions: [
      { question: "Describe your greatest weakness?", explanation: "I tend to be a perfectionist, which sometimes slows me down." },
      { question: "What is the most creative thing you've done in a work setting?", explanation: "I developed a new workflow that increased efficiency by 20%." }
    ],
    strengths: "Strong analytical skills and excellent communication.",
    weaknesses: ["Can be overly critical of own work.", "Sometimes struggles with delegation."],
    culturalFit: "High",
    sentiment: "Charismatic",
    delivery: "Not concise; professional",
    notes: ["Best Candidate ever"],
    topSkills: [
      { skill: "Soft Skills", explanation: "Excellent communication and teamwork." },
      { skill: "Analytics", explanation: "Strong analytical and problem-solving skills." },
      { skill: "Python", explanation: "Proficient in Python programming." },
      { skill: "Problem Solving", explanation: "Effective at identifying and solving complex problems." },
      { skill: "Delivery of Speech", explanation: "Professional and clear in speech delivery." }
    ]
  },
  {
    id: 2,
    name: "John Doe",
    slug: "john-doe",
    date: "July 29, 2024",
    status: "Interviewed",
    details: "Detailed information about John Doe.",
    questions: [
      { question: "How do you handle stress?", explanation: "I prioritize tasks and take breaks to stay focused." },
      { question: "Can you give an example of a time you showed leadership?", explanation: "I led a project team to successfully complete a major project ahead of schedule." }
    ],
    strengths: "Leadership and time management.",
    weaknesses: ["Can be impatient with slow progress.", "Sometimes struggles with work-life balance."],
    culturalFit: "Medium",
    sentiment: "Confident",
    delivery: "Concise and clear",
    notes: ["Strong leadership skills"],
    topSkills: [
      { skill: "Leadership", explanation: "Proven ability to lead teams effectively." },
      { skill: "Time Management", explanation: "Excellent at managing time and meeting deadlines." },
      { skill: "JavaScript", explanation: "Proficient in JavaScript programming." },
      { skill: "Project Management", explanation: "Experienced in managing large projects." },
      { skill: "Public Speaking", explanation: "Confident and clear in public speaking." }
    ]
  },
  {
    id: 3,
    name: "Jane Smith",
    slug: "jane-smith",
    date: "July 30, 2024",
    status: "Hired",
    details: "Detailed information about Jane Smith.",
    questions: [
      { question: "What motivates you?", explanation: "Achieving goals and continuous learning." },
      { question: "Describe a challenging project you worked on.", explanation: "I worked on a project with tight deadlines and managed to deliver on time with high quality." }
    ],
    strengths: "Motivation and adaptability.",
    weaknesses: ["Can be too focused on details.", "Sometimes struggles with saying no."],
    culturalFit: "High",
    sentiment: "Positive",
    delivery: "Engaging and clear",
    notes: ["Highly motivated and adaptable"],
    topSkills: [
      { skill: "Motivation", explanation: "Highly motivated to achieve goals." },
      { skill: "Adaptability", explanation: "Quick to adapt to new situations and challenges." },
      { skill: "React", explanation: "Proficient in React development." },
      { skill: "Teamwork", explanation: "Excellent at working in team environments." },
      { skill: "Communication", explanation: "Strong communication skills." }
    ]
  },
  {
    id: 4,
    name: "Mary Jane",
    slug: "mary-jane",
    date: "July 28, 2024",
    status: "Pending",
    details: "Detailed information about Mary Jane.",
    questions: [
      { question: "What is your greatest strength?", explanation: "My ability to stay calm under pressure." },
      { question: "How do you handle conflict?", explanation: "I address it directly and seek a resolution that benefits everyone." }
    ],
    strengths: "Calm under pressure and conflict resolution.",
    weaknesses: ["Can be too detail-oriented.", "Sometimes struggles with time management."],
    culturalFit: "Medium",
    sentiment: "Calm",
    delivery: "Clear and concise",
    notes: ["Good at conflict resolution"],
    topSkills: [
      { skill: "Conflict Resolution", explanation: "Effective at resolving conflicts." },
      { skill: "Detail-Oriented", explanation: "Pays attention to details." },
      { skill: "Python", explanation: "Proficient in Python programming." },
      { skill: "Teamwork", explanation: "Works well in team settings." },
      { skill: "Communication", explanation: "Strong communication skills." }
    ]
  },
  {
    id: 5,
    name: "Sahil Seth",
    slug: "sahil-seth",
    date: "July 28, 2024",
    status: "Pending",
    details: "Detailed information about Sahil Seth.",
    questions: [
      { question: "What motivates you?", explanation: "Achieving goals and continuous learning." },
      { question: "Describe a challenging project you worked on.", explanation: "I worked on a project with tight deadlines and managed to deliver on time with high quality." }
    ],
    strengths: "Motivation and adaptability.",
    weaknesses: ["Can be too focused on details.", "Sometimes struggles with saying no."],
    culturalFit: "High",
    sentiment: "Positive",
    delivery: "Engaging and clear",
    notes: ["Highly motivated and adaptable"],
    topSkills: [
      { skill: "Motivation", explanation: "Highly motivated to achieve goals." },
      { skill: "Adaptability", explanation: "Quick to adapt to new situations and challenges." },
      { skill: "React", explanation: "Proficient in React development." },
      { skill: "Teamwork", explanation: "Excellent at working in team environments." },
      { skill: "Communication", explanation: "Strong communication skills." }
    ]
  },
  {
    id: 6,
    name: "Xavier Dun",
    slug: "xavier-dun",
    date: "July 28, 2024",
    status: "Pending",
    details: "Detailed information about Xavier Dun.",
    questions: [
      { question: "What is your greatest strength?", explanation: "My ability to stay calm under pressure." },
      { question: "How do you handle conflict?", explanation: "I address it directly and seek a resolution that benefits everyone." }
    ],
    strengths: "Calm under pressure and conflict resolution.",
    weaknesses: ["Can be too detail-oriented.", "Sometimes struggles with time management."],
    culturalFit: "Medium",
    sentiment: "Calm",
    delivery: "Clear and concise",
    notes: ["Good at conflict resolution"],
    topSkills: [
      { skill: "Conflict Resolution", explanation: "Effective at resolving conflicts." },
      { skill: "Detail-Oriented", explanation: "Pays attention to details." },
      { skill: "Python", explanation: "Proficient in Python programming." },
      { skill: "Teamwork", explanation: "Works well in team settings." },
      { skill: "Communication", explanation: "Strong communication skills." }
    ]
  },
  {
    id: 7,
    name: "Sage Rogers",
    slug: "sage-rogers",
    date: "July 28, 2024",
    status: "Pending",
    details: "Detailed information about Sage Rogers.",
    questions: [
      { question: "What motivates you?", explanation: "Achieving goals and continuous learning." },
      { question: "Describe a challenging project you worked on.", explanation: "I worked on a project with tight deadlines and managed to deliver on time with high quality." }
    ],
    strengths: "Motivation and adaptability.",
    weaknesses: ["Can be too focused on details.", "Sometimes struggles with saying no."],
    culturalFit: "High",
    sentiment: "Positive",
    delivery: "Engaging and clear",
    notes: ["Highly motivated and adaptable"],
    topSkills: [
      { skill: "Motivation", explanation: "Highly motivated to achieve goals." },
      { skill: "Adaptability", explanation: "Quick to adapt to new situations and challenges." },
      { skill: "React", explanation: "Proficient in React development." },
      { skill: "Teamwork", explanation: "Excellent at working in team environments." },
      { skill: "Communication", explanation: "Strong communication skills." }
    ]
  },
  {
    id: 8,
    name: "Jackson Liu",
    slug: "jackson-liu",
    date: "July 28, 2024",
    status: "Pending",
    details: "Detailed information about Jackson Liu.",
    questions: [
      { question: "What is your greatest strength?", explanation: "My ability to stay calm under pressure." },
      { question: "How do you handle conflict?", explanation: "I address it directly and seek a resolution that benefits everyone." }
    ],
    strengths: "Calm under pressure and conflict resolution.",
    weaknesses: ["Can be too detail-oriented.", "Sometimes struggles with time management."],
    culturalFit: "Medium",
    sentiment: "Calm",
    delivery: "Clear and concise",
    notes: ["Good at conflict resolution"],
    topSkills: [
      { skill: "Conflict Resolution", explanation: "Effective at resolving conflicts." },
      { skill: "Detail-Oriented", explanation: "Pays attention to details." },
      { skill: "Python", explanation: "Proficient in Python programming." },
      { skill: "Teamwork", explanation: "Works well in team settings." },
      { skill: "Communication", explanation: "Strong communication skills." }
    ]
  },
  {
    id: 9,
    name: "Emily Clark",
    slug: "emily-clark",
    date: "July 28, 2024",
    status: "Pending",
    details: "Detailed information about Emily Clark.",
    questions: [
      { question: "What motivates you?", explanation: "Achieving goals and continuous learning." },
      { question: "Describe a challenging project you worked on.", explanation: "I worked on a project with tight deadlines and managed to deliver on time with high quality." }
    ],
    strengths: "Motivation and adaptability.",
    weaknesses: ["Can be too focused on details.", "Sometimes struggles with saying no."],
    culturalFit: "High",
    sentiment: "Positive",
    delivery: "Engaging and clear",
    notes: ["Highly motivated and adaptable"],
    topSkills: [
      { skill: "Motivation", explanation: "Highly motivated to achieve goals." },
      { skill: "Adaptability", explanation: "Quick to adapt to new situations and challenges." },
      { skill: "React", explanation: "Proficient in React development." },
      { skill: "Teamwork", explanation: "Excellent at working in team environments." },
      { skill: "Communication", explanation: "Strong communication skills." }
    ]
  },
  {
    id: 10,
    name: "Zachary Aldenburg",
    slug: "zachary-aldenburg",
    date: "July 28, 2024",
    status: "Pending",
    details: "Detailed information about Zachary Aldenburg.",
    questions: [
      { question: "What is your greatest strength?", explanation: "My ability to stay calm under pressure." },
      { question: "How do you handle conflict?", explanation: "I address it directly and seek a resolution that benefits everyone." }
    ],
    strengths: "Calm under pressure and conflict resolution.",
    weaknesses: ["Can be too detail-oriented.", "Sometimes struggles with time management."],
    culturalFit: "Medium",
    sentiment: "Calm",
    delivery: "Clear and concise",
    notes: ["Good at conflict resolution"],
    topSkills: [
      { skill: "Conflict Resolution", explanation: "Effective at resolving conflicts." },
      { skill: "Detail-Oriented", explanation: "Pays attention to details." },
      { skill: "Python", explanation: "Proficient in Python programming." },
      { skill: "Teamwork", explanation: "Works well in team settings." },
      { skill: "Communication", explanation: "Strong communication skills." }
    ]
  },
  {
    id: 11,
    name: "Lorita Schuster",
    slug: "lorita-schuster",
    date: "July 28, 2024",
    status: "Pending",
    details: "Detailed information about Lorita Schuster.",
    questions: [
      { question: "What motivates you?", explanation: "Achieving goals and continuous learning." },
      { question: "Describe a challenging project you worked on.", explanation: "I worked on a project with tight deadlines and managed to deliver on time with high quality." }
    ],
    strengths: "Motivation and adaptability.",
    weaknesses: ["Can be too focused on details.", "Sometimes struggles with saying no."],
    culturalFit: "High",
    sentiment: "Positive",
    delivery: "Engaging and clear",
    notes: ["Highly motivated and adaptable"],
    topSkills: [
      { skill: "Motivation", explanation: "Highly motivated to achieve goals." },
      { skill: "Adaptability", explanation: "Quick to adapt to new situations and challenges." },
      { skill: "React", explanation: "Proficient in React development." },
      { skill: "Teamwork", explanation: "Excellent at working in team environments." },
      { skill: "Communication", explanation: "Strong communication skills." }
    ]
  }
  // Add more candidates as needed
];
const randomAudioFiles = [
  "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
];

function CandidateDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const candidate = candidates.find(c => c.slug === slug);
  const statusOptions = ["Pending", "In Progress", "Completed", "Rejected"];
  const [status, setStatus] = useState(candidate ? candidate.status : "Pending");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);
  const [audioUrl, setAudioUrl] = useState(randomAudioFiles[0]);
  const [currentTime, setCurrentTime] = useState('0:00');
  const audioRef = useRef(null);

  // Function to update the current time display

  if (!candidate) {
    return <div><IoMdArrowBack className="text-4xl cursor-pointer max-md:text-[20px] max-md:ml-6" onClick={() => navigate(-1)} /> <div className='flex items-center justify-center h-[60vh]'><h1>Candidate not found</h1></div></div>;
  }
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const toggleTranscript = () => setIsTranscriptOpen(prev => !prev);

  const updateCurrentTime = () => {
    if (audioRef.current) {
      const minutes = Math.floor(audioRef.current.currentTime / 60);
      const seconds = Math.floor(audioRef.current.currentTime % 60);
      setCurrentTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    }
  };

  // Update the current time every second
  useEffect(() => {
    const timer = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Optional: Change audio file every 10 seconds or on some condition
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomAudioFiles.length);
    setAudioUrl(randomAudioFiles[randomIndex]);
  }, []); // Add dependencies if needed

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap lg:flex-nowrap space-x-4 mb-4">
        <div className="w-full lg:w-3/4 flex flex-col space-y-4">
          <header className="flex gap-4 items-center py-4">
            <IoMdArrowBack className="text-4xl cursor-pointer" onClick={() => navigate(-1)} />
            <h1 className="text-[36px] font-bold inter color-black">
              {candidate.name}
            </h1>
            <span className="relative inline-block">
              <select
                name="candidateMatch"
                value={status}
                onChange={handleStatusChange}
                className="px-3 py-1 text-sm font-semibold text-gray-700 bg-[#90c4c7] rounded-full appearance-none pr-8"
              >
                {statusOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FaCaretDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 pointer-events-none" />
            </span>
          </header>
          <div className="flex max-md:flex-wrap gap-y-[30px] space-x-4 mb-4">
            <button className="px-4 py-2 border text-color-green rounded-[27px] flex items-center gap-x-[10px]">
              <span><MdOutlineMail /></span> Send Email
            </button>
            <button className="px-4 py-2 bg-color-green text-white rounded-[27px] flex items-center gap-x-[10px]">
              <span><IoMdDownload /></span> Download Resume
            </button>
            <button className="px-4 py-2 bg-color-green text-white rounded-[27px] flex items-center gap-x-[10px]">
              <span><FaExternalLinkAlt /></span> Preview LinkedIn
            </button>
          </div>
          <div className="flex items-center max-md:w-[88vw] space-x-4 border p-2 shadow-lg w-fit rounded-[30px]">
            <audio ref={audioRef} controls>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <span className="text-sm">{currentTime}</span>
          </div>
          {/* <div className="flex items-center max-md:w-[88vw] space-x-4 border p-2 shadow-lg w-fit rounded-[30px]">
            <audio controls>
              <source
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
            <span className="text-sm">0:02</span>
          </div> */}
          <div className="relative mb-4">
            <div
              className="bg-[#90c4c7] text-gray-700 py-2 px-4 rounded-full flex items-center justify-between cursor-pointer"
              onClick={toggleTranscript}
            >
              View Transcript
              <span><FaCaretDown className={`transition-transform ${isTranscriptOpen ? 'rotate-180' : ''}`} /></span>
            </div>
            {isTranscriptOpen && (
              <div className="absolute top-full left-0 bg-[#F9FFFF] border border-[#D9D9D9] p-4 rounded shadow-md max-h-[300px] overflow-y-auto z-10 mt-2 w-full">
                <h3 className="font-bold mb-2">Transcript</h3>
                <p className="text-gray-700">Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.Here is some random text for the transcript. This is just placeholder text to demonstrate scrolling functionality in the dropdown. You can replace this with the actual transcript content you want to display.</p>
              </div>
            )}
          </div>
          <div className="bg-[#F9FFFF] border border-[#D9D9D9] p-4 rounded shadow mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Custom Questions</h3>
                {candidate.questions.map((q, index) => (
                  <div key={index}>
                    <p>{index + 1}) {q.question}</p>
                    <p className="text-gray-500">Explanation: &ldquo;{q.explanation}&ldquo;</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-bold mb-2">Candidate Strengths</h3>
                <p className="text-gray-500">{candidate.strengths}</p>
                <h3 className="font-bold mb-2">Candidate Weaknesses</h3>
                {candidate.weaknesses.map((weakness, index) => (
                  <p key={index} className="text-gray-500">{weakness}</p>
                ))}
                <h3 className="font-bold mb-2">Cultural Fit</h3>
                <p className="text-gray-500">{candidate.culturalFit}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Candidate Sentiment</h3>
                <p className="text-gray-500">{candidate.sentiment}</p>
                <h3 className="font-bold mb-2">Delivery of Speech</h3>
                <p className="text-gray-500">{candidate.delivery}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="bg-[#F9FFFF] border border-[#D9D9D9] p-4 pb-12 rounded shadow mb-4">
            <h3 className="font-bold mb-2">Notes</h3>
            <div className="bg-[#fff] p-4 rounded border border-[#D9D9D9]">
              {candidate.notes.map((note, index) => (
                <li key={index} className="list-type-disc">{note}</li>
              ))}
            </div>
          </div>
          <div className="bg-[#F9FFFF] border border-[#D9D9D9] p-4 rounded shadow mb-4">
            <h3 className="text-[18] font-semibold inter text-black">
              Top Skills
            </h3>
            {candidate.topSkills.map((skill, index) => (
              <div key={index}>
                <p>{index + 1}) {skill.skill}</p>
                <p className="text-gray-500">Explanation: &ldquo;{skill.explanation}&ldquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CandidateDetail;
