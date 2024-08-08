import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import axios from 'axios';

const CombinedJobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
  });
  const [skills, setSkills] = useState(['', '', '']);
  const [questions, setQuestions] = useState(['', '', '']);
  const [warning, setWarning] = useState('');
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [companyId] = useState("e57bcbed-cbbc-4aef-842b-4f5044398c29");

  const skillOptions = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'];
  const questionOptions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
    setWarning('');
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
    setWarning('');
  };

  const addSkill = () => {
    if (skills.length >= 5) {
      setWarning('Maximum skills limit exceeded');
      return;
    }
    setSkills([...skills, '']);
    setWarning('');
  };

  const addQuestion = () => {
    if (questions.length >= 5) {
      setWarning('Maximum questions limit exceeded');
      return;
    }
    setQuestions([...questions, '']);
    setWarning('');
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);

    const jobData = {
      company: companyId,
      title: formData.jobTitle,
      description: formData.jobDescription,
      questions: questions.filter(q => q.trim() !== ''),
      targeted_skills: skills.filter(s => s.trim() !== ''),
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/jobs/', jobData);
      console.log('Job added successfully:', response.data);
      // Handle successful response
  
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Response error:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request error:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
    } finally {
      setIsSubmitting(false); // Reset submitting status
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      {step === 1 ? (
        <div className="gap-x-[20px]">
          <div className="inset-0 flex items-center justify-center mt-[50px]">
            <div className="rounded-lg border p-6 w-full max-w-[1100px] relative">
              <Link
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                to="/"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </Link>
              <h2 className="text-[32px] font-bold text-color-green inter mb-4">
                Job Details
              </h2>
              <div className="mb-4">
                <h3 className="text-[20px] inter font-medium">Job Title</h3>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="bg-[#D9EBEC] outline-none p-4 rounded-md mt-2 w-[100%] h-[50px] text-[20px] inter font-medium text-black"
                />
              </div>
              <div>
                <h3 className="text-[20px] inter font-medium">Job Description</h3>
                <textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  className="bg-[#D9EBEC] outline-none p-4 rounded-md mt-2 w-full h-[300px] text-[20px] inter font-medium text-black"
                />
              </div>
              <div className="mt-[20px] w-full flex justify-end items-end">
                <Button type="button" onClick={() => setStep(2)}>Next</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='max-w-[1200px] mx-auto'>
          <div className="flex flex-col w-full items-center md:p-6">
            <div className="p-6 rounded-[20px] w-full border border-gray-300">
              <h2 className="inter text-[36px] font-bold color-green mt-[30px] mb-[30px]">Customize Interview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="inter text-[24px] font-normal color-black">Ideal Skills</h3>
                  <p className='inter text-[16px] font-medium color-black mb-[20px]'>Add or search for skills required of the candidate.</p>
                  {skills.map((skill, index) => (
                    <div key={index} className="relative mb-2 flex items-center">
                      <div className="flex-grow flex items-center">
                        <select
                          value={skill}
                          onChange={(e) => handleSkillChange(index, e.target.value)}
                          className="w-full p-2 px-[10px] border border-gray-300 outline-none bg-[#d9ebec] rounded-[15px]"
                          style={{ flex: '1 1 auto' }}
                        >
                          <option value="">Select</option>
                          {skillOptions.filter(opt => !skills.includes(opt) || opt === skill).map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                        {index >= 3 && (
                          <button
                            onClick={() => removeSkill(index)}
                            className="ml-2 text-red-500"
                            aria-label="Remove skill"
                          >
                            &times;
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className='flex justify-center items-center'>
                    <Button type="button" onClick={addSkill}>Add another skill</Button>
                  </div>
                </div>
                <div>
                  <h3 className="inter text-[24px] font-normal color-black">Questions</h3>
                  <p className='inter text-[16px] font-medium color-black mb-[20px]'>Add custom questions for the candidate interview.</p>
                  {questions.map((question, index) => (
                    <div key={index} className="relative mb-2 flex items-center">
                      <div className="flex-grow flex items-center">
                        <input
                          type="text"
                          value={question}
                          onChange={(e) => handleQuestionChange(index, e.target.value)}
                          className="w-full p-2 border border-gray-300 outline-none bg-[#d9ebec] rounded-[15px]"
                          style={{ flex: '1 1 auto' }}
                        />
                        {index >= 3 && (
                          <button
                            onClick={() => removeQuestion(index)}
                            className="ml-2 text-red-500"
                            aria-label="Remove question"
                          >
                            &times;
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className='flex justify-center items-center'>
                    <Button type="button" onClick={addQuestion}>Add another question</Button>
                  </div>
                </div>
              </div>
              {warning && <p className="text-red-500 text-center mt-4">{warning}</p>}
              <div className="flex justify-between mt-[150px]">
                <Button type="button" onClick={() => setStep(1)}>Back</Button>
                <Button type="button" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Add job'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CombinedJobForm;
