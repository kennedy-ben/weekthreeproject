/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const submitBtn = document.querySelector('.submit_btn');
const nameEdt = document.getElementById('name_edt');
const emailEdt = document.getElementById('email_edt');
const commentEdt = document.getElementById('comment_edt');

$(document).ready(() => {
  $('.details_header').css('font-weight', 'Bold');
  $('.design').click(() => {
    toggleElementVisibility('design_img');
    toggleElementVisibility('design_details');
  });

  $('.development').click(() => {
    toggleElementVisibility('development_img');
    toggleElementVisibility('development_details');
  });

  $('.product_management').click(() => {
    toggleElementVisibility('product_management_img');
    toggleElementVisibility('product_management_details');
  });

  fadedHoverEffect('1');
  fadedHoverEffect('2');
  fadedHoverEffect('3');
  fadedHoverEffect('4');
  fadedHoverEffect('5');
  fadedHoverEffect('6');
  fadedHoverEffect('7');
  fadedHoverEffect('8');

  $('form').submit((e) => {
    const username = $('#name_edt').val();
    const useremail = $('#email_edt').val();
    const feedback_text = $('#comment_edt').val();

    // Check whether the any field is empty
    if (username.trim() == '') {
      alert('The name field is empty');
    } else if (useremail.trim() == '') {
      alert('The email field is empty');
    } else if (feedback_text.trim() == '') {
      alert('The message field is empty');
    } else {
      alert(`${username} we have received your message. Thank you fro reaching out to us.`);
    }
    e.preventDefault();
  });
});

// eslint-disable-next-line max-len

var toggleElementVisibility = (elementId) => {
  $(`#${elementId}`).slideToggle();
};

var fadedHoverEffect = (imageNum) => {
  const overlayText = document.getElementById(`overlay${imageNum}`);
  $(`#portfolio_project_img_${imageNum}`).hover(() => {
    // eslint-disable-next-line no-undef
    $(`#portfolio_project_img_${imageNum}`).animate({ opacity: '0.4' });
    overlayText.style.visibility = 'visible';
  }, () => {
    // eslint-disable-next-line no-undef
    $(`#portfolio_project_img_${imageNum}`).animate({ opacity: '1' });
    overlayText.style.visibility = 'hidden';
  });
};

const addHoverEffect = (imageNum) => {
  const overlayText = document.getElementById(`overlay${imageNum}`);
  $(`#portfolio_project_img_${imageNum}`).hover(() => {
    overlayText.style.visibility = 'visible';
  }, () => {
    overlayText.style.visibility = 'hidden';
  });
};

const buttonOnclick = (button) => {
  button.addEventListener('click', () => {
    getUserFeedback();
    Event.preventDefault();
  });
};

var getUserFeedback = () => {
  const username = $('#name_edt').val();
  const useremail = $('#email_edt').val();
  const feedback_text = $('#comment_edt').val();

  if (username.trim() == '') {
    alert('The name field is empty');
  } else if (useremail.trim() == '') {
    alert('The email field is empty');
  } else if (feedback_text.trim() == '') {
    alert('The message field is empty');
  } else {
    alert(`${username} Thanks alot,we are working on the problem.`);
  }
};
