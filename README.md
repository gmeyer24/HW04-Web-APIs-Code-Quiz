<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">HW04-Web-APIs-Code-Quiz</h3>

  <p align="center">
    <br />
    <a href="https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz">View Demo</a>
    ·
    <a href="https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz/issues">Report Bug</a>
    ·
    <a href="https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Description

The objective of this project was to build a timed coding quiz that contains multiple choice questions. This quiz runs in the browswer and features updated HTML and CSS that is powered by JavaScript. The quiz is on JavaScript Fundamentals and it stores high scores to guage students' progress against their peers. 

[![JavaScript Quiz Deployed Link][product-screenshot]](https://gmeyer24.github.io/HW04-Web-APIs-Code-Quiz/)

![Alt text](Images/screencapture-127-0-0-1-5500-index-html-2023-10-29-18_52_10.png)

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `gmeyer24`, `HW04-Web-APIs-Code-Quiz`, `twitter_handle`, `gavinpmeyer`, `gmail`, `gpmeyer24`, `HW04-Web-APIs-Code-Quiz`, `project_description` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![JavaScript][JavaScript.com]][JavaScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
<!-- ## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->


<!-- USAGE EXAMPLES -->
## Usage

- To start the game, select the "START" button. You will have 30 seconds to complete the quiz.

![Alt text](Images/image.png)

- Answer each multiple choice question by clicking on the answer you believe to be correct. If correct, it will say below the options and then load the next question 2 seconds later. If wrong, if will say below the options as well and load the next question, but you will be penalized and lose 10 seconds on the timer. 

![Alt text](Images/image-1.png)

- Example of a question with alert if you got it right or wrong 

![!\[Alt text\](image.png)](Images/image-2.png)

- The game is over whenever you answer all of the questions or if the time runs out to do so. When the game ends because you answered all of the questions before the time runs out, the below "Game Summary" screen will automatically load. Please put your initials in the click "Submit." This will log your scores in the Highscores page.

![Alt text](Images/image-3.png)

- When the game comes to an end because you ran out of time, an alert pops up letting you know. Please select "OK" to advance and follow the same instructions above.

![Alt text](Images/image-4.png)

-If you click on the "View Highscores" link at the top of the page. The below Page will load.

![Alt text](Images/image-5.png)




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 <!-- --> 


<!-- CONTACT -->
## Contact

Gavin Meyer - gpmeyer24@gmail.com - GitHub: gmeyer24

Project GitHub Link: [https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz](https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz)

Project Deployed Link: [https://gmeyer24.github.io/HW04-Web-APIs-Code-Quiz](https://gmeyer24.github.io/HW04-Web-APIs-Code-Quiz)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Vincent Teune's README Example](https://github.com/cobalt88/CPS-API)
* [Othneil Drew's README Example](https://github.com/othneildrew/Best-README-Template#best-readme-template)
* [Make a README](https://www.makeareadme.com/)
* [W3Schools](https://www.w3schools.com/)
* Carlin Shaw - Tutor

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/gmeyer24/HW04-Web-APIs-Code-Quiz.svg?style=for-the-badge
[contributors-url]: https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gmeyer24/HW04-Web-APIs-Code-Quiz.svg?style=for-the-badge
[forks-url]: https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz/network/members
[stars-shield]: https://img.shields.io/github/stars/gmeyer24/HW04-Web-APIs-Code-Quiz.svg?style=for-the-badge
[stars-url]: https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz/stargazers
[issues-shield]: https://img.shields.io/github/issues/gmeyer24/HW04-Web-APIs-Code-Quiz.svg?style=for-the-badge
[issues-url]: https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz/issues
[license-shield]: https://img.shields.io/github/license/gmeyer24/HW04-Web-APIs-Code-Quiz.svg?style=for-the-badge
[license-url]: https://github.com/gmeyer24/HW04-Web-APIs-Code-Quiz/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gavinpmeyer
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[JavaScript.com]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JavaScript-url]: https://www.javascript.com/
