// JavaScript Document

// Course Outline Components
function toggleCourseGoals() {
    var myElement = document.getElementById('course-goals');
    var displaySetting = myElement.style.display;
    var buttonCourseGoals = document.getElementById('button-course-goals');
    if (displaySetting == 'block') {
      myElement.style.display = 'none';
    }
    else {
      myElement.style.display = 'block';
    }
  }
  
  function toggleLearningOutcomes() {
    var myElement = document.getElementById('learning-outcomes');
    var displaySetting = myElement.style.display;
    var buttonLearningOutcomes = document.getElementById('button-learning-outcomes');
    if (displaySetting == 'block') {
      myElement.style.display = 'none';
    }
    else {
      myElement.style.display = 'block';
    }
  }
  
  function toggleEvaluationCriteria() {
    var myElement = document.getElementById('evaluation-criteria');
    var displaySetting = myElement.style.display;
    var buttonEvaluationCriteria = document.getElementById('button-evaluation-criteria');
    if (displaySetting == 'block') {
      myElement.style.display = 'none';
    }
    else {
      myElement.style.display = 'block';
    }
  }