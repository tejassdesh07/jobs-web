import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Button';

const JobTwo = () => {
  const [skills, setSkills] = useState(['', '', '']);
  const [questions, setQuestions] = useState(['', '', '']);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [warning, setWarning] = useState('');

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
    setSelectedSkills([...selectedSkills, ...skills.filter(skill => skill !== '')]);
    setSkills([...skills, '']);
    setWarning('');
  };

  const addQuestion = () => {
    if (questions.length >= 5) {
      setWarning('Maximum questions limit exceeded');
      return;
    }
    setSelectedQuestions([...selectedQuestions, ...questions.filter(question => question !== '')]);
    setQuestions([...questions, '']);
    setWarning('');
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
    setSelectedSkills(newSkills);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
    setSelectedQuestions(newQuestions);
  };

  const skillOptions = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'];
  const questionOptions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className="flex flex-col w-full items-center md:p-6">
        <div className="p-6 rounded-[20px] w-full border border-gray-300">
          <h2 className="inter text-[36px] font-bold color-green mt-[30px] mb-[30px]">Customize Interview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="inter text-[24px] font-normal color-black">Ideal Skills</h3>
              <p className='inter text-[16px] font-medium color-black mb-[20px]'>Add or search for skills required of the candidate.</p>
              {skills.map((skill, index) => (
                <div key={index} className="relative mb-2">
                  <select
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="w-full p-2 px-[10px] border border-gray-300 outline-none bg-[#d9ebec] rounded-[15px] pr-12"
                  >
                    <option value="">Select</option>
                    {skillOptions.filter(opt => !selectedSkills.includes(opt) || opt === skill).map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {index >= 3 && (
                    <button
                      onClick={() => removeSkill(index)}
                      className="absolute right-6 top-[45%] transform -translate-y-1/2 text-red-500"
                      aria-label="Remove skill"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              <div className='flex justify-center items-center'>
                <button onClick={addSkill} className="mt-2 p-3 bg-color-green px-[20px] text-white rounded-[20px] shadow-md">Add another skill</button>
              </div>
            </div>
            <div>
              <h3 className="inter text-[24px] font-normal color-black">Questions</h3>
              <p className='inter text-[16px] font-medium color-black mb-[20px]'>Add custom questions for the candidate interview.</p>
              {questions.map((question, index) => (
                <div key={index} className="relative mb-2">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => handleQuestionChange(index, e.target.value)}
                    className="w-full p-2 border border-gray-300 outline-none bg-[#d9ebec] rounded-[15px] pr-12"
                  />
                  {index >= 3 && (
                    <button
                      onClick={() => removeQuestion(index)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500"
                      aria-label="Remove question"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              <div className='flex justify-center items-center'>
                <Button onClick={addQuestion}>Add another question</Button>
              </div>
            </div>
          </div>
          {warning && <p className="text-red-500 text-center mt-4">{warning}</p>}
          <div className="flex justify-between mt-[150px]">
            <Button to="/add_detail">Back</Button>
            <Button to="/senior_product">Add job</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTwo;
