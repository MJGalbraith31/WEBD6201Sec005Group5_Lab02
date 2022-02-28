/*
    Authors: MJ Galbraith (100755993), Matthew Austin (100660651)
    File: app.js
    Date: 2022/02/11
    Description: 
        This is the javascript file for the website
    
*/

"use strict";

let core;

((core) =>
{
    /**
     * displayHome - Displays the body content for index.html
     */
    function displayHome()
    {
        console.log("Disp Home"); 

        let body = document.getElementById("bodyCopy"); 

        body.innerHTML = `<br/><h2>Welcome to our WEBD6201 lab page.</h2>
        <p>We created this website to domonstrate our proficiency and understanding with Javascript.</p>`; 
    }

    /**
     * displayAbout - Displays the body content for about.html
     */
    function displayAbout()
    {
        console.log("Disp About"); 

        let body = document.getElementById("bodyCopy");

        /* about section style modeled from... 
          https://www.w3schools.com/howto/howto_css_about_page.asp
        */
          body.innerHTML = `
        <div class="about-section">
        <h1>About Us Page</h1>
        <p>WEBD 6201 Group# 05</p>
        </div>
        
        <h2 style="text-align:center">Our Team</h2>
        <div class="row">
          <div class="column">
            <div class="card">
              <img src="./Assets/Images/MJsLabPicture.jpg" alt="MJ" class="headShot"/>
              <div class="container">
                <h2>MJ Galbraith</h2>
                <p class="title">Computer Programmer</p>
                <p>murray.galbraith@dcmail.ca</p>
                <a href="#">Resume</a>
              </div>
            </div>
          </div>
        
          <div class="column">
            <div class="card">
              <img src="./Assets/Images/mattsLabPicture.jpg" alt="Matthew" class="headShot"/>
              <div class="container">
                <h2>Matthew Austin</h2>
                <p class="title">Computer Programmer</p>
                <p>matthew.austin@dcmail.ca</p>
                <a href="#">Resume</a>
              </div>
            </div>
          </div>
        </div>
        `;
    }

    /**
     * displayProjects - Displays the body contents for projects.html
     */
    function displayProjects()
    {
        console.log("Disp Proj"); 

        let body = document.getElementById("bodyCopy"); 

        body.innerHTML = `<br/><h2>Our Projects</h2>
        <p>Below are some of our favorite projects that we have done. </p>
        <div class="card" style="background-color:grey">
          <h3>A Custom Dice Roller</h3>
          <img src="./Assets/Images/DiceRoller.png" alt="Dice Rolling Program" style="Width:40%"/>
          <p>A personal project created by MJ, this program allows you to input any number of a specific kind of die you wish to 
          roll and will print both the individual results and the total of those rolls. The second tab has a number of less common 
          dice and the ability to roll dice with a custom number of sides.</p>
        </div>
        
        <div class="card" style="background-color:grey">
          <h3>A WPF windows app with sql</h3>
          <img src="./Assets/Images/NETD3202_Lab03.png" alt="WPF Application"  style="Width:40%"/>
          <p>A lab assignment from NETD 3202, this program demonstrated our ability to build WPF desktop apps with functionality to create, read,
          update, and delete records from a SQL database.</p>
        </div>

        <div class="card" style="background-color:grey" style="Width:40%">
          <h3>ASP.NET Core Web App with Model-View-Controller</h3>
          <img src="./Assets/Images/NETD3202_DotNetIdentityFramework.png" alt="DotNet Identity Framework" style = "Width:40%"/>
          <p>Another assignment from NETD 3202, this program uses MVC and the Identity Framework to build a web application with login capabilities.</p>
        </div>
        `;
    }

    /**
     * displayServices - Displays body content for services.html 
    */
    function displayServices()
    {
        console.log("Disp Serv"); 

        let body = document.getElementById("bodyCopy"); 

        body.innerHTML = `<br/><h2>Our Services</h2>
        <p>Below are several of the main services that we provide. </p>
        <ul class="list-group">
          <li class="list-group-item">Web Design</li>
          <li class="list-group-item">Computer Programming</li>
          <li class="list-group-item">Computer Systems Analysis</li>
        </ul>
        `; 
    }

    /**
     * displayContact - This method adds the body html elements for the contact page
     */
    function displayContact()
    {
        console.log("Disp Cont"); 

        let body = document.getElementById("bodyCopy");

        body.innerHTML = `<div class="card" style="background-color:grey">
          <form onsubmit="event.preventDefault();">
            <h2>Contact Us</h2>
            <div class="form-group row">
              <label for="inputFName" class="col-sm-2 col-form-label">First Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputFName" placeholder="First Name">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputLName" class="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputLName" placeholder="Last Name">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail" class="col-sm-2 col-form-label">Email Address</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail" placeholder="Email Address">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputMessage" class="col-sm-2 col-form-label">Message</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputMessage" placeholder="Message">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <button id="contactSubmit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
        `;

        $("#contactSubmit").on("click", (event)=>
        {
            console.log("First Name: " + $("#inputFName").val()); 
            console.log("Last Name: " + $("#inputLName").val()); 
            console.log("Email: " + $("#inputEmail").val()); 
            console.log("Message: " + $("#inputMessage").val()); 

            window.setTimeout(goHome, 3000);
        });
    }

    function displayLogin()
    {
        console.log("Disp Login"); 

        $("#loginButton").on("click", function(event)
        {
            event.preventDefault();
            let userName = $("#username").val();
            
            $("#logio").before("<li><span class='nav-item'>" + userName + "</span></li>");
            $("#logio").html('<a class="nav-link active" id="logio" aria-current="page" href="login.html"><i class="fas fa-sign-out-alt fa-lg"></i> Logout</a>')
            

        })
    }

    function displayRegister()
    {
        console.log("Disp Regi"); 

        document.getElementById("registerForm").insertAdjacentHTML("beforebegin", `<div id="ErrorMessage"></div>`);

        let errorMessage = $("#ErrorMessage");
        errorMessage.hide();

        $("#submitButton").on("click", function(event)
        {
          event.preventDefault();

          let firstName = $("#firstName");
          let lastName = $("#lastName");
          let emailAddress = $("#emailAddress");
          let password = $("#password");
          let confirmPassword = $("#confirmPassword");
          let success = true;
          let error = "Error: ";

          let nameExperssion = new RegExp("^[A-Z][a-zA-Z]+$"); 
          let emailExpression = new RegExp("^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)@[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$");
          let passwordExpression = new RegExp("^[_a-zA-Z0-9-]{6,}$");

          if (!nameExperssion.test(firstName.val()))
          {
            error += "Invalid First Name (must be at least 2 letters)";
            success = false;
            firstName.trigger("focus").trigger("select");
          }
          else if (!nameExperssion.test(lastName.val()))
          {
            error += "Invalid Last Name (must be at least 2 letters)";
            success = false;
            lastName.trigger("focus").trigger("select");
          }
          else if (!emailExpression.test(emailAddress.val()))
          {
            error += "Invalid Email Address";
            success = false;
            emailAddress.trigger("focus").trigger("select");
          }
          else if (!passwordExpression.test(password.val()))
          {
            error += "Invalid Password (must be at least 6 characters)";
            success = false;
            password.trigger("focus").trigger("select");
          }
          else if (password.val() != confirmPassword.val())
          {
            error += "Passwords Need to Match";
            success = false;
            password.trigger("focus").trigger("select");
          }

          if (success)
          {
            errorMessage.hide();

            let displayName = firstName.val() + " " + lastName.val();
            let userName = firstName.val().toLocaleLowerCase() + lastName.val().toLocaleLowerCase();
            let newUser = new core.User(displayName, emailAddress.val(), userName, password.val());

            console.log(newUser.serialize());

            document.forms[0].reset();
          }
          else
          {
            errorMessage.show().addClass("alert alert-danger").text(error);
          }
        });
    }

    function goHome()
    {
        window.location.href = "./index.html";
    }

    // function validateRegister()
    // {
    //     let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    // }  ^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)@[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$

    function Start()
    {
        console.log("App Started...");

        document.getElementById("projLink").innerHTML = `<i class="fas fa-cog fa-lg"></i> Projects`;

        document.getElementById("aboutLinkLi").insertAdjacentHTML("afterend", `<li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html"><i class="fas fa-person fa-lg"></i> Human Resources</a>
            </li>`);

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About Us":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
          case "Login":
              displayLogin();
            break;
          case "Register":
              displayRegister();
            break;
        }

        // toggle login/logout
       //toggleLogin();
        
    }

    window.addEventListener("load", Start);

    core.Start = Start;
})(core || (core={}));

((core) =>
{
    class User
    {
        // getters and setters 
        get DisplayName()
        {
          return this.m_displayName;
        }

        set DisplayName(value)
        {
          this.m_displayName = value;
        }

        get EmailAddress()
        {
          return this.m_emailAddress;
        }

        set EmailAddress(value)
        {
          this.m_emailAddress = value;
        }

        get Username()
        {
          return this.m_username;
        }

        set Username(value)
        {
          this.m_username = value;
        }

        get Password()
        {
          return this.m_password;
        }

        set Password(value)
        {
          this.m_password = value;
        }

        // constructor
        constructor(displayName = "", emailAddress = "", username = "", password = "")
        {
          this.DisplayName = displayName;
          this.EmailAddress = emailAddress;
          this.Username = username;
          this.Password = password;
        }

        //methods
        toString()
        {
          return `Display Name     : ${this.DisplayName} \nEmail Address : ${this.EmailAddress} \nUsername : ${this.Username}`;
        }

        serialize()
        {
          if (this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
          {
            return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
          }
          else
          {
            console.error("One or more properties of the User is empty");
            return null;
          }
        }

        deserialize(data)
        {
          let propertyArray = data.split(",");
          this.DisplayName = propertyArray[0];
          this.EmailAddress = propertyArray[1];
          this.Username = propertyArray[2];
        }
    }

    core.User = User;
})(core || (core={}));