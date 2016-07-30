/* Set up skills-at-a-glance as a set of variables so that they can be used as filter buttons
/* to easily select and view related jobs and projects */
var video = "Multimedia";
var lead = "Leadership";
var web = "Web Development";
var write = "Writing, Journalism";
var comms = "Other Communication";
var collab = "Collaboration";
var create = "Creativity, Innovation";
var perform = "Speaking, Performance";
var tech = "Specific Platforms";
var bio = {
    "name" : "Benson Gardner",
    "role" : "Communication, Technology, Innovation",
    "contacts" : {
        "mobile" : "608-556-4846",
        "email" : "bensongardner@yahoo.com",
        "github" : "https://github.com/BensonGardner",
        "twitter" : "http://twitter.com/bensongardner",
        "linkedin" : "https://www.linkedin.com/in/benson-gardner-7009859",
        "location" : "Madison, Wisconsin, USA"
    },
    "welcomeMessage" : "Engaging, informative, beautiful experiences in service
    of a mission.",
    "skills" : [lead, web, video, write, create, collab, perform, tech, comms],
    "biopic" : "images/bg-logo.svg",
};

var work = {
    "jobs" : {
        "dpi" : {
            "title" : "Multimedia Publications Editor",
            "employer" : "Wisconsin Department of Public Instruction",
            "location" : "Madison, Wisconsin, USA",
            "years" : "2007 -",
            "description" : "I edit and manage certain communications from the
            state superintendent of public instruction. I am the front-end
            developer in the Office of the State Superintendent. I also
            coordinate multimedia production at the agency. That includes
            leading teams of producers in creating high quality video pieces in
            a variety of styles. I create guidelines for agency staff and
            consult and train to ensure our most important videos are high
            quailty. I also led the effort to create a pocliy to guide the
            organization's social media use, back when that was a really new
            thing."
        },
        "webdev" : {
            "title" : "Front-End Web Developer",
            "employer" : "",
            "location" : "Madison, Wisconsin, USA",
            "years" : "2016 -"
        },
        "indie" : {
            "title" : "Independent Media Producer",
            "location" : "Madison, Wisconsin, USA",
            "years" : "1996 -",
            "description" : "I've led teams to create animated explainers, history-focused reality television, and sketch comedy."
        },
        "uwp" : {
            "title" : "Publicity Manager",
            "employer" : "University of Wisconsin Press",
            "location" : "Madison, Wisconsin, USA",
            "years" : "2004 - 2007",
            "description" : "I worked at a fast pace with a group of wonderful interns to get our books some attention when they hit the market."
        },
        "wpr" : {
            "title" : "News Reporter/Producer",
            "employer" : "Wisconsin Public Radio",
            "location" : "Madison, Wisconsin, USA",
            "years" : "1997 - 2004",
            "description" : "I got to use my own journalistic judgment, people skills, writing, audio editing, and vocal performance abilities. I won a number of awards for my stories. I served for a few years as Legal Affairs Reporter and filled in as State Capitol Reporter. I spent a year as a talk show producer as well."
        },
        "wpt" : {
            "title" : "Associate Television Producer / Web Content Producer / Production Assistant",
            "employer" : "Wisconsin Public Television",
            "location" : "Madison, Wisconsin, USA",
            "years" : "2001 - 2004",
            "description" : "Created TV segments in historical documentary style and was part of a content team for portalwisconsin.org."
        },
        "improv" : {
            "title" : "Comedy Improviser",
            "employer" : "ComedySportz-Madison, Monkey Business Institute",
            "location" : "Madison, Wisconsin, USA",
            "years" : "1996 - 2002, 2008 - 2012",
            "description" : "Improvisation means giving up control while looking like you aren't."
        }
    }
};

var education = {
    "schools": [
        {
            "name" : "University of Chicago",
            "location" : "Chicago, Illinois, USA",
            "degree" : "B.A.",
            "majors" : ["Anthropology"],
            "dates" : "1991 - 1995",
            "url" :  "http://www.uchicago.edu",
            "notable" : ["Cum laude. National Merit Scholar."]
        },
        {
            "name" : "Menomonie High School",
            "location" : "Menomonie, Wisconsin, USA",
            "degree" : "High School Diploma",
            "majors" : ["n/a"],
            "dates" : "1987 - 1991",
            "url" : "http://mhs.sdmaonline.com",
            "notable" : ["Top 3 percent of class. All-State Scholar. National Honors Society."]
        }
    ],
    "onlineCourses": [
        {
            "title" : "Front-End Developer Nanodegree",
            "school" : "Udacity.com",
            "dates" : "2016",
            "url" : "http://udacity.com"
        }
    ],
    "otherTraining": [
        {
            "name" : "Journalism"
        },
        {
            "name" : "Grant-writing"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Example Animated Explainer: Social Entrepeneurship and Kids",
            "dates" : "2015",
            "images" : "images/ceoot-560.jpg",
            "link" : "http://youtube.com/watch?v=JZEZHcrl-2Q",
            "description" : "Create a professional, compelling video message for an educational nonprofit",
            "role" : "Assemble and lead team, write script in consultation with client, direct video, voice narration",
            "job" : "Independent Media Producer"
        },
        {
            "title" : "Wisconsin Department of Public Instruction Video Program",
            "dates" : "2007 - present",
            "images" : "images/dpiyt-560.jpg",
            "link" : "http://www.wisconsinlife.org/story/no-obstacles-parkour-athletes",
            "description" : "Create and maintain extensive, effective video production for a state agency and an elected official",
            "role" : "Coordinate all production in the agency, direct high-profile videos, shoot and edit video, write and voice narration",
            "job" : "Multimedia Publications Editor"
        },
        {
            "title" : "Parkour Profile",
            "dates" : "2015",
            "images" : "images/parkour-560.jpg",
            "link" : "http://wilife.org/no-obstacles-for-parkour-athletes",
            "description" : "Find an interesting person and bring their story to life for broadcast on Wisconsin Public Television",
            "role" : "Writer-Producer",
            "job" : "Independent Media Producer"
        },
        {
            "title" : "Online Portfolio",
            "dates" : "2016",
            "images" : "images/bg-logo.svg",
            "link" : "https://github.com/BensonGardner/portfolio",
            "description" : "Create a responsive, engaging site to display my work",
            "role" : "Developer",
            "job" : "Front-End Developer"
        },
        {
            "title" : "Historical Markers",
            "dates" : "2006-07",
            "images" : "images/markersgroup-560.jpg",
            "link" : "https://www.cityofmadison.com/planning/pdf/markersgroup.pdf",
            "client" : "City of Madison Sesquicentennial Commission",
            "description" : "Research, write, and choose images for 12 engaging signs about periods of Madison history chosen by the city's Sesquicentennial Commission",
            "role" : "Writer / Photo Researcher",
            "job" : "Independent Media Producer"
        }
    ]
};

var duties = [
    {
        "name" : "Recruit, hire, oversee staff",
        "relatedSkills" : [lead],
        "relatedJobs" : [work.jobs.dpi, work.jobs.uwp]
    },
    {
        "name" : "Lead production teams",
        "relatedSkills" : [lead, video, collab, create],
        "relatedJobs" : [work.jobs.dpi, work.jobs.indie]
    },
    {
        "name" : "Manage organization's video program",
        "relatedSkills" : [lead, video],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Manage state superintendent’s electronic newsletter, DPI-ConnectEd",
        "relatedSkills" : [write, collab, web, create],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Write news releases, articles, and other materials",
        "relatedSkills" : [write, collab],
        "relatedJobs" : [work.jobs.dpi, work.jobs.uwp]
    },
    {
        "name" : "Create video pieces",
        "relatedSkills" : [video, collab, create, write],
        "relatedJobs" : [work.jobs.dpi, work.jobs.wpt, work.jobs.indie]
    },
    {
        "name" : "Record narration and voiceover",
        "relatedSkills" : [video, perform, comms],
        "relatedJobs" : [work.jobs.dpi, work.jobs.wpt, work.jobs.indie]
    },
    {
        "name" : "Produce award-winning radio news segments for statewide broadcast",
        "relatedSkills" : [video, create, perform, write],
        "relatedJobs" : [work.jobs.wpr]
    },
    {
        "name" : "Comic acting",
        "relatedSkills" : [perform, create],
        "relatedJobs" : [work.jobs.improv, work.jobs.indie]
    },
    {
        "name" : "Craft and oversee wording and visual presentation of agency messages for videos",
        "relatedSkills" : [lead, write, comms, video, create],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Draft quotations and talking points",
        "relatedSkills" : [write, comms],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Plan, execute communications campaigns",
        "relatedSkills" : [lead, collab, create, video, web, write, comms],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Assemble, facilitate workgroups and committees",
        "relatedSkills" : [lead, collab, perform],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Serve as lead author for agency policy on social media",
        "relatedSkills" : [lead, comms, web, create],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Advise on social media, video, and emerging communications technologies",
        "relatedSkills" : [lead, comms, create, web, collab],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Communicate via social media",
        "relatedSkills" : [comms],
        "relatedJobs" : [work.jobs.uwp]
    },
    {
        "name" : "Manage content for state superintendent’s and other areas of agency website",
        "relatedSkills" : [lead, web, write, collab],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Capture video, audio, still photographs",
        "relatedSkills" : [video, comms],
        "relatedJobs" : [work.jobs.dpi, work.jobs.indie, work.jobs.wpr]
    },
    {
        "name" : "Serve as writer, photo researcher in creation of historical markers for permanent outdoor installation",
        "relatedSkills" : [write, comms, create, collab],
        "relatedJobs" : [work.jobs.indie]
    },
    {
        "name" : "Adobe Creative Cloud (Premiere Pro, AfterEffects, Audition, Photoshop, Dreamweaver, Illustrator)",
        "relatedSkills" : [video, tech],
        "relatedJobs" : [work.jobs.dpi, work.jobs.indie]
    },
    {
        "name" : "Manage & edit web content",
        "relatedSkills" : [lead, write, web, tech],
        "relatedJobs" : [work.jobs.dpi, work.jobs.wpr, work.jobs.wpt]
    },
    {
        "name" : "HTML",
        "relatedSkills" : [web, tech],
        "relatedJobs" : [work.jobs.dpi, work.jobs.wpr, work.jobs.wpt, work.jobs.webdev]
    },
    {
        "name" : "CSS",
        "relatedSkills" : [web, tech],
        "relatedJobs" : [work.jobs.dpi, work.jobs.webdev]
    },
    {
        "name" : "Drupal",
        "relatedSkills" : [web, tech],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Use in-house content management",
        "relatedSkills" : [web, tech],
        "relatedJobs" : [work.jobs.dpi, work.jobs.wpr, work.jobs.wpt]
    },
    {
        "name" : "FTP",
        "relatedSkills" : [web, tech],
        "relatedJobs" : [work.jobs.wpr, work.jobs.wpt]
    },
    {
        "name" : "Register & manage web domains",
        "relatedSkills" : [web],
        "relatedJobs" : [work.jobs.dpi, work.jobs.indie]
    },
    {
        "name" : "Assist in media relations",
        "relatedSkills" : [comms],
        "relatedJobs" : [work.jobs.dpi]
    },
    {
        "name" : "Oversee publicity strategy",
        "relatedSkills" : [comms, create, lead],
        "relatedJobs" : [work.jobs.uwp]
    },
    {
        "name" : "Work with contacts to secure print, broadcast, and online coverage",
        "relatedSkills" : [comms, collab],
        "relatedJobs" : [work.jobs.uwp, work.jobs.indie]
    },
    {
        "name" : "Strategize & create publicity materials",
        "relatedSkills" : [write, create, comms],
        "relatedJobs" : [work.jobs.uwp]
    },
        {
        "name" : "Research historical and contemporary topics",
        "relatedSkills" : [write],
        "relatedJobs" : [work.jobs.indie, work.jobs.wpt]
    },
    {
        "name" : "Research contemporary topics",
        "relatedSkills" : [write],
        "relatedJobs" : [work.jobs.wpr]
    },
    {
        "name" : "Write informative, engaging, and/or entertaining scripts",
        "relatedSkills" : [write, create, video],
        "relatedJobs" : [work.jobs.indie, work.jobs.dpi, work.jobs.wpt]
    },
    {
        "name" : "Establish lighthearted, enthusiastic tone in workgroup and on screen",
        "relatedSkills" : [comms, lead, create, perform],
        "relatedJobs" : [work.jobs.indie]
    },
    {
        "name" : "Develop and execute concepts for comedy and nonfiction television",
        "relatedSkills" : [create, collab, video],
        "relatedJobs" : [work.jobs.indie]
    },
    {
        "name" : "Arrange and publicize screenings",
        "relatedSkills" : [comms, lead],
        "relatedJobs" : [work.jobs.indie]
    },
    {
        "name" : "FinalCut Pro",
        "relatedSkills" : [video, tech],
        "relatedJobs" : [work.jobs.indie]
    },
    {
        "name" : "Avid Media Composer",
        "relatedSkills" : [video, tech],
        "relatedJobs" : [work.jobs.wpt]
    },
    {
        "name" : "Vegas Video",
        "relatedSkills" : [video, tech],
        "relatedJobs" : [work.jobs.indie]
    },
    {
        "name" : "Arrange and conduct interviews with experts and other external sources",
        "relatedSkills" : [video, collab, write],
        "relatedJobs" : [work.jobs.indie, work.jobs.dpi, work.jobs.wpt]
    },
    {
        "name" : "Arrange and conduct interviews with elected officials, legislators, and other external sources",
        "relatedSkills" : [video, collab, write],
        "relatedJobs" : [work.jobs.wpr]
    },
    {
        "name" : "Create and produce new talk radio show as part of team",
        "relatedSkills" : [video, collab, create],
        "relatedJobs" : [work.jobs.wpr]
    },
    {
        "name" : "Produce non-fiction television segments for statewide broadcast",
        "relatedSkills" : [video, collab, write],
        "relatedJobs" : [work.jobs.wpt]
    },
        {
        "name" : "Instigate laughter: great, debilitating laughter",
        "relatedSkills" : [perform, comms, create],
        "relatedJobs" : [work.jobs.improv]
    },
    {
        "name" : "Engage live audiences",
        "relatedSkills" : [comms, lead, create, perform],
        "relatedJobs" : [work.jobs.improv]
    },
    {
        "name" : "Improvise effectively",
        "relatedSkills" : [comms, perform, create],
        "relatedJobs" : [work.jobs.improv]
    },
    {
        "name" : "Rely on trust, teamwork to solve tough problems",
        "relatedSkills" : [collab, lead],
        "relatedJobs" : [work.jobs.improv]
    },
    {
        "name" : "Endure a governor deliberately banging his elbows on the microphone table as he answered a question he apparently didn't want me to ask",
        "relatedSkills" : [],
        "relatedJobs" : [work.jobs.wpr]
    },
    {
        "name" : "Experiment with some new platform called Facebook",
        "relatedSkills" : [create, comms],
        "relatedJobs" : [work.jobs.uwp]
    },
    {
        "name" : "Develop an unexpected fervor for Finland",
        "relatedSkills" : [],
        "relatedJobs" : [work.jobs.wpt]
    },
    {
        "name" : "Create dynamic, engaging websites",
        "relatedSkills" : [web, create],
        "relatedJobs" : [work.jobs.webdev]
    },
    {
        "name" : "Javascript",
        "relatedSkills" : [web, tech],
        "relatedJobs" : [work.jobs.webdev]
    },
    {
        "name" : "Git & GitHub",
        "relatedSkills" : [web, tech],
        "relatedJobs" : [work.jobs.webdev]
    },
    {
        "name" : "Hide a few Easter eggs, like this one, in my online resume",
        "relatedSkills" : [web, create],
        "relatedJobs" : [work.jobs.webdev]
    }
];

bio.display = function(){
    /* Create function that allows filtering of duties using the skills */
    function filterDuties(event) {
        $('.duty-wrapper').removeClass('hidden');
        $('.duty-wrapper').children().removeClass('hidden');
        $('.show-hide-button').addClass('showing');
        $('.show-hide-button a').text('-');
        var clickedButton = $(this).children();
        if (clickedButton.hasClass('filtering')) {
            $('.filtering').removeClass('filtering');
            $('.filtered-in').removeClass('filtered-in');
        } else {
            $('.filtering').removeClass('filtering');
            $('[data-related-skills*="' + event.data.skillToFilter + '"]').addClass('filtered-in');
            $('[data-related-skills*="' + event.data.skillToFilter + '"]').children().addClass('filtered-in');
            $('[data-related-skills]').not('[data-related-skills*="' + event.data.skillToFilter + '"]').removeClass('filtered-in');
            $('[data-related-skills]').not('[data-related-skills*="' + event.data.skillToFilter + '"]').children().removeClass('filtered-in');
            $('.emphasis.filtered-in').removeClass('filtered-in');
            $(this).children().addClass('filtering');
        }
    }

    /* Create a show/hide button */
    function showHide() {
        $('.filtering').removeClass('filtering');
        var clickedButton = $(this);
        console.log(clickedButton);
        if (clickedButton.hasClass('showing')) {
            $('.duty-wrapper').addClass('hidden');
            $('.duty-wrapper').children().addClass('hidden');
            $('.show-hide-button').removeClass('showing');
            $('.show-hide-button a').text('+');
        } else {
            $('.duty-wrapper').removeClass('hidden');
            $('.duty-wrapper').children().removeClass('hidden');
            $('.duty-wrapper').addClass('filtered-in');
            $('.duty-wrapper').children().addClass('filtered-in');
            $('.show-hide-button').addClass('showing');
            $('.show-hide-button a').text('-');
        }
    }

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedPhone = HTMLmobile.replace("%data%" , bio.contacts.mobile);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $('.bio-container').prepend(HTMLheaderName.replace('%data%', bio.name));
    $('.name-message-container').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    $('.bio-container').prepend(formattedBioPic);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedLinkedin);
    $('#footerContacts').append(formattedGitHub);
    $('#footerContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedPhone);
    $('#footerContacts').append(formattedLocation);
    $('.skills-container').append(HTMLshowHideButton);
    $('.show-hide-button').click(showHide);
    $('.skills-container').append(HTMLskillsStart);
    var x = 0;
    while (bio.skills.length > x) {
      var currentSkill = bio.skills[x];
      var formattedSkills = HTMLskills.replace('%data%', currentSkill);
      formattedSkills = formattedSkills.replace('%data%', currentSkill);
      $('#skills').append(formattedSkills);
      $('[data-skill="' + currentSkill + '"]').click({skillToFilter:currentSkill},filterDuties);
      x++;
    }
};

/* Define function that creates a shrinking sticky header, but not at small screen widths or when window is resized small. Function also
adjusts font sizes in header */
function shrinkHeader() {
    if ($(window).width() > 796) {
        var content = $('#page-content');
        var scrollStatus = content.scrollTop();
        var headerHeight = Math.max(100, (150 - scrollStatus));
        var bioContainerWidth = Math.max((600 - scrollStatus), 400);
        var fontSize = Math.max(1.5,(2.00 - (0.009 * scrollStatus)));
        var nameBottomMargin = Math.max(10 - (0.35 * scrollStatus),0);
        var nameTopMargin = Math.min(10,(0.45 * scrollStatus));
        var welcomeMessageOpacity = 1.0 - (0.02 * scrollStatus);
        var biopicWidth = Math.max(100, (150 - scrollStatus));
        var skillLineHeight = Math.max(34, (44 - (0.2 * scrollStatus)));
        var backgroundOpacity = Math.min(1.0, (0.83 + ((17 * scrollStatus) / 1000)));
        $('#header').css('height' , headerHeight + 'px');
        $('#header').css('background-color' , 'rgba(51, 32, 102, ' + backgroundOpacity + ')');
        $('#header').css('position' , 'fixed');
        $('#header').css('-webkit-flex-direction' , 'row');
        $('#header').css('flex-direction' , 'row');
        $('.bio-container').css('display' , 'flex');
        $('.bio-container').css('flex-wrap' , 'nowrap');
        $('.bio-container').css('-webkit-flex-direction' , 'row');
        $('.bio-container').css('flex-direction' , 'row');
        $('.bio-container').css('width' , '684px');
        $('.bio-container').css('height' , 'auto');
        $('.biopic').css('width' , biopicWidth + 'px');
        $('#name').css('fontSize' , fontSize + 'em');
        $('#name').css('marginBottom' , nameBottomMargin + 'px');
        $('.welcome-message').css('opacity' , welcomeMessageOpacity);
        $('.skills-container').css('display' , '-webkit-flex');
        $('.skills-container').css('display' , 'flex');
        $('.skills-container').css('-webkit-flex-direction' , 'row');
        $('.skills-container').css('-webkit-justify-content' , 'center');
        $('.skills-container').css('flex-direction' , 'row');
        $('.skills-container').css('justify-content' , 'center');
        $('.skills-container').css('align-items' , 'center');
        $('.skills-container').css('-webkit-align-items' , 'center');
        $('.skills-container').css('min-width' , '481px');
        $('.skill').css('fontSize' , (fontSize * 0.40) + 'em');
        $('.skill').css('line-height' , skillLineHeight + 'px');
        var buttonHeight = $('.show-hide-button').height();
        $('.show-hide-button').css('fontSize' , (fontSize * 0.9) + 'em');
        $('.show-hide-button').css('min-width' , (0.7 * buttonHeight) + 'px');
        $('#main').css('padding-top' , '150px');
        $('#main').css('min-width' , 'auto');
    } else {
        $('#header').css('-webkit-flex-direction' , 'column');
        $('#header').css('flex-direction' , 'column');
        $('#header').css('position' , 'relative');
        $('#header').css('background-color' , 'rgba(51, 32, 102, 0.83)');
        $('#header').css('height' , 'auto');
        $('.bio-container').css('width' , '100%');
        $('.bio-container').css('height' , '150px');
        $('.bio-container').css('display' , 'block');
        $('.bio-container').css('background-color' , 'rgba(51, 32, 102, 0.83)');
        $('#name').css('fontSize' , fontSize + 'em');
        $('.skills-container').css('min-width' , '100px');
        $('.skills-container').css('display' , 'block');
        $('.skills-container').css('background-color' , 'rgba(51, 32, 102, 0.83)');
        $('.skill').css('font-size' , '0.65em');
        $('#main').css('padding-top' , '0px');
        $('#main').css('min-width' , '320px');
    }
    if ($(window).width() > 347) {
        $('h1').css('font-size' , '32px');
    }
}

var currentJob;

work.display = function(){
    matchJobs = function(duty) {
        if(duty === currentJob) {
            return true;
        }
    };
    for (var key in work.jobs) {
      if (work.jobs.hasOwnProperty(key)) {
        currentJob = work.jobs[key];
        $('#workExperience').append(HTMLworkStart);
      }
    // Create two options for first line of each work-entry - because the freelancer entry does not have 'employer' property.
      if (Boolean(work.jobs[key].employer) === true) {
        $('.work-entry:last').append((HTMLworkEmployer.replace('%data%' , work.jobs[key].employer)) + (HTMLworkTitle.replace('%data%' , work.jobs[key].title)));
      } else {
          $('.work-entry:last').append(HTMLworkTitle.replace('%data%' , work.jobs[key].title));
      }
      $('.work-entry:last').append(HTMLworkLocation.replace('%data%' , work.jobs[key].location) + HTMLworkYears.replace('%data%' , work.jobs[key].years));
    // Add all related job duties to the work-entry -- instead of a description.
      for (dutiesIndex = 0; dutiesIndex < duties.length; dutiesIndex++) {
        if (duties[dutiesIndex].relatedJobs.some(matchJobs)) {
           var formattedDuty = HTMLDuty.replace('%%data%%', duties[dutiesIndex].name);
            formattedDuty = formattedDuty.replace('%data%', duties[dutiesIndex].relatedSkills);
            formattedDuty = formattedDuty.replace('%data%', duties[dutiesIndex].relatedSkills);
            $('.work-entry:last').append(formattedDuty);
        }
      }
    }
};

projects.display = function() {
    for (projectIndex = 0; projectIndex < projects.projects.length; projectIndex++) {
        $('#projects').append(HTMLprojectStart);
        var formattedProjectName = HTMLprojectTitle.replace('%data%' , projects.projects[projectIndex].title);
        formattedProjectName = formattedProjectName.replace('#' , projects.projects[projectIndex].link);
        var formattedProjectImage = HTMLprojectImage.replace('%data%' , projects.projects[projectIndex].images);
        formattedProjectImage = formattedProjectImage.replace('#' , projects.projects[projectIndex].link);
        var formattedProjectChallenge = HTMLprojectChallenge.replace('%data%' , projects.projects[projectIndex].description);
        var formattedProjectRole = HTMLprojectRole.replace('%data%' , projects.projects[projectIndex].role);
        $('.project-entry:last').append(formattedProjectName + formattedProjectRole + formattedProjectChallenge + formattedProjectImage);
    }
};

education.display = function (){
    var formattedSchoolDegree;
    var formattedSchoolMajor;
    for (schoolsIndex = 0; schoolsIndex < education.schools.length; schoolsIndex++) {
      $('#education').append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace('%data%' , education.schools[schoolsIndex].name);
      if (education.schools[schoolsIndex].degree !== undefined) {
        formattedSchoolDegree = HTMLschoolDegree.replace('%data%' , education.schools[schoolsIndex].degree);
      } else {
        formattedSchoolDegree = "</a></span>";
      }
      var formattedSchoolDates = HTMLschoolDates.replace('%data%' , education.schools[schoolsIndex].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%' , education.schools[schoolsIndex].location);
       if (education.schools[schoolsIndex].majors !== undefined) {
        formattedSchoolMajor = HTMLschoolMajor.replace('%data%' , education.schools[schoolsIndex].majors);
      } else {
        formattedSchoolMajor = "";
      }
      var formattedSchoolNotable = HTMLschoolNotable.replace('%data%' , education.schools[schoolsIndex].notable);
      $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation +
        formattedSchoolMajor + formattedSchoolNotable);
    }
    $('#education').append(HTMLonlineClasses);
    for (onlinecourseIndex = 0; onlinecourseIndex < education.onlineCourses.length; onlinecourseIndex++) {
        $('#education').append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%' , education.onlineCourses[onlinecourseIndex].title);
        formattedOnlineTitle = formattedOnlineTitle.replace('#' , education.onlineCourses[onlinecourseIndex].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%' , education.onlineCourses[onlinecourseIndex].school);
        var formattedOnlineDates = HTMLonlineDates.replace('%data%' , education.onlineCourses[onlinecourseIndex].dates);
        $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates);
    }
};

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);