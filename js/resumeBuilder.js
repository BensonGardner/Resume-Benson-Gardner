    /* Set up skills-at-a-glance as a set of variables so that they can be used as
       filter buttons to easily select and view related jobs and projects */
    var bio = {
        "name": "Benson Gardner",
        "role": "Communication, Technology, Innovation",
        "skills": ["Leadership", "Web Development", "Multimedia",
            "Writing, Journalism", "Creativity, Innovation",
            "Collaboration", "Speaking, Performance", "Specific Platforms",
            "Other Communication"
        ],
        "contacts": {
            "mobile": "608-556-4846",
            "email": "bensongardner@yahoo.com",
            "github": "https://github.com/BensonGardner",
            "twitter": "http://twitter.com/bensongardner",
            "linkedin": "https://www.linkedin.com/in/benson-gardner-7009859",
            "location": "Madison, Wisconsin, USA"
        },
        "welcomeMessage": "Engaging, informative, beautiful experiences in service " +
            "of a mission.",
        "biopic": "images/bg-logo.svg"
    };

    var work = {
        "jobs": [{
            "title": "Communications Officer / Multimedia Publications Editor",
            "employer": "Wisconsin Department of Public Instruction",
            "location": "Madison, Wisconsin, USA",
            "dates": "2007 -",
            "description": "I edit and manage certain communications from the" +
                "state superintendent of public instruction. I am the front-end" +
                "developer in the Office of the State Superintendent. I also" +
                "coordinate multimedia production at the agency. That includes" +
                "leading teams of producers in creating high quality video pieces in" +
                "a variety of styles. I create guidelines for agency staff and" +
                "consult and train to ensure our most important videos are high" +
                "quailty. I also led the effort to create a pocliy to guide the" +
                "organization's social media use, back when that was a really new" +
                "thing."
        }, {
            "title": "Front-End Web Developer",
            "employer": "",
            "location": "Madison, Wisconsin, USA",
            "dates": "2016 -",
            "description": "I create beautiful experiences in service of a goal."
        }, {
            "title": "Independent Media Producer",
            "employer": "",
            "location": "Madison, Wisconsin, USA",
            "dates": "1996 -",
            "description": "I've led teams to create animated explainers," +
                " history-focused reality television, and sketch comedy."
        }, {
            "title": "Publicity Manager",
            "employer": "University of Wisconsin Press",
            "location": "Madison, Wisconsin, USA",
            "dates": "2004 - 2007",
            "description": "I worked at a fast pace with a group of wonderful" +
                " interns to get our books some attention when they hit the market."
        }, {
            "title": "News Reporter/Producer",
            "employer": "Wisconsin Public Radio",
            "location": "Madison, Wisconsin, USA",
            "dates": "1997 - 2004",
            "description": "I got to use my own journalistic judgment, people " +
                "skills, writing, audio editing, and vocal performance abilities." +
                " I won a number of awards for my stories. I served for a few " +
                "years as Legal Affairs Reporter and filled in as State Capitol " +
                "Reporter. I spent a year as a talk show producer as well."
        }, {
            "title": "Associate Producer / Web Content Producer " +
                "/ Production Assistant",
            "employer": "Wisconsin Public Television",
            "location": "Madison, Wisconsin, USA",
            "dates": "2001 - 2004",
            "description": "Created TV segments in historical documentary " +
                "style and was part of a content team for portalwisconsin.org."
        }, {
            "title": "Comedy Improviser",
            "employer": "ComedySportz-Madison, Monkey Business Institute",
            "location": "Madison, Wisconsin, USA",
            "dates": "1996 - 2002, 2008 - 2012",
            "description": "Improvisation means giving up control while " +
                "looking like you aren't."
        }]
    };

    var education = {
        "schools": [{
            "name": "University of Chicago",
            "location": "Chicago, Illinois, USA",
            "degree": "B.A.",
            "majors": ["Anthropology"],
            "dates": "1991 - 1995",
            "url": "http://www.uchicago.edu",
            "notable": ["Cum laude. National Merit Scholar."]
        }, {
            "name": "Menomonie High School",
            "location": "Menomonie, Wisconsin, USA",
            "degree": "",
            "majors": [""],
            "dates": "1987 - 1991",
            "url": "http://mhs.sdmaonline.com",
            "notable": [
                "Top 3 percent of class. All-State Scholar. National Honors Society."
            ]
        }],
        "onlineCourses": [{
            "title": "Front-End Developer Nanodegree",
            "school": "Udacity.com",
            "dates": "2016",
            "url": "http://udacity.com"
        }],
        "otherTraining": [{
            "name": "Journalism"
        }, {
            "name": "Grant-writing"
        }]
    };

    var projects = {
        "projects": [{
            "title": "Example Animated Explainer: Social Entrepeneurship and Kids",
            "dates": "2015",
            "images": ["images/ceoot-560.jpg"],
            "link": "http://youtube.com/watch?v=JZEZHcrl-2Q",
            "description": "Create a professional, compelling video message for an educational nonprofit",
            "role": "Assemble and lead team, write script in consultation with client, direct video, voice narration",
            "job": "Independent Media Producer"
        }, {
            "title": "Wisconsin Department of Public Instruction Video Program",
            "dates": "2007 - present",
            "images": ["images/dpiyt-560.jpg"],
            "link": "http://www.wisconsinlife.org/story/no-obstacles-parkour-athletes",
            "description": "Create and maintain extensive, effective video production for a state agency and an elected official",
            "role": "Coordinate all production in the agency, direct high-profile videos, shoot and edit video, write and voice narration",
            "job": "Multimedia Publications Editor"
        }, {
            "title": "Parkour Profile",
            "dates": "2015",
            "images": ["images/parkour-560.jpg"],
            "link": "http://wilife.org/no-obstacles-for-parkour-athletes",
            "description": "Find an interesting person and bring their story to life for broadcast on Wisconsin Public Television",
            "role": "Writer-Producer",
            "job": "Independent Media Producer"
        }, {
            "title": "Online Portfolio",
            "dates": "2016",
            "images": ["images/bg-logo.svg"],
            "link": "https://github.com/BensonGardner/portfolio",
            "description": "Create a responsive, engaging site to display my work",
            "role": "Developer",
            "job": "Front-End Developer"
        }, {
            "title": "Historical Markers",
            "dates": "2006-07",
            "images": ["images/markersgroup-560.jpg"],
            "link": "https://www.cityofmadison.com/planning/pdf/markersgroup.pdf",
            "client": "City of Madison Sesquicentennial Commission",
            "description": "Research, write, and choose images for 12 engaging signs about periods of Madison history chosen by the city's Sesquicentennial Commission",
            "role": "Writer / Photo Researcher",
            "job": "Independent Media Producer"
        }]
    };

    bio.display = function() {
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
                $('[data-related-skills*="' + event.data.skillToFilter + '"]').addClass(
                    'filtered-in');
                $('[data-related-skills*="' + event.data.skillToFilter + '"]').children()
                    .addClass('filtered-in');
                $('[data-related-skills]').not('[data-related-skills*="' +
                    event.data.skillToFilter + '"]').removeClass(
                    'filtered-in');
                $('[data-related-skills]').not('[data-related-skills*="' +
                    event.data.skillToFilter + '"]').children().removeClass(
                    'filtered-in');
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
        var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $('.bio-container').prepend(HTMLheaderName.replace('%data%', bio.name));
        $('.name-message-container').append(HTMLwelcomeMsg.replace('%data%',
            bio.welcomeMessage));
        $('.bio-container').prepend(formattedBioPic);
        $('#footerContacts').append(formattedEmail, formattedLinkedin,
            formattedGitHub, formattedTwitter, formattedPhone,
            formattedLocation);
        $('.skills-container').append(HTMLshowHideButton);
        $('.show-hide-button').click(showHide);
        $('.skills-container').append(HTMLskillsStart);
        var x = 0;
        while (bio.skills.length > x) {
            var currentSkill = bio.skills[x];
            var formattedSkills = HTMLskills.replace('%data%', currentSkill);
            formattedSkills = formattedSkills.replace('%data%', currentSkill);
            $('#skills').append(formattedSkills);
            $('[data-skill="' + currentSkill + '"]').click({
                skillToFilter: currentSkill
            }, filterDuties);
            x++;
        }
    };

    /* Define function that creates a shrinking sticky header, but not at small screen widths
    or when window is resized small. Function also adjusts font sizes in header */
    function shrinkHeader() {
        var content = $('#page-content');
        var scrollStatus = content.scrollTop();
        var fontSize = Math.max(1.5, (2.00 - (0.009 * scrollStatus)));
        if ($(window).width() > 796) {
            var headerHeight = Math.max(100, (150 - scrollStatus));
            var bioContainerWidth = Math.max((600 - scrollStatus), 400);
            var nameBottomMargin = Math.max(10 - (0.35 * scrollStatus), 0);
            var nameTopMargin = Math.min(10, (0.45 * scrollStatus));
            var welcomeMessageOpacity = 1.0 - (0.02 * scrollStatus);
            var biopicWidth = Math.max(100, (150 - scrollStatus));
            var skillLineHeight = Math.max(34, (44 - (0.2 * scrollStatus)));
            var backgroundOpacity = Math.min(1.0, (0.83 + ((17 * scrollStatus) /
                1000)));
            $('#header').css('height', headerHeight + 'px');
            $('#header').css('background-color', 'rgba(51, 32, 102, ' +
                backgroundOpacity + ')');
            $('#header').css('position', 'fixed');
            $('#header').css('-webkit-flex-direction', 'row');
            $('#header').css('flex-direction', 'row');
            $('.bio-container').css('display', 'flex');
            $('.bio-container').css('flex-wrap', 'nowrap');
            $('.bio-container').css('-webkit-flex-direction', 'row');
            $('.bio-container').css('flex-direction', 'row');
            $('.bio-container').css('width', '684px');
            $('.bio-container').css('height', 'auto');
            $('.biopic').css('width', biopicWidth + 'px');
            $('#name').css('fontSize', fontSize + 'em');
            $('#name').css('marginBottom', nameBottomMargin + 'px');
            $('#welcome-message').css('opacity', welcomeMessageOpacity);
            $('.skills-container').css('display', '-webkit-flex');
            $('.skills-container').css('display', 'flex');
            $('.skills-container').css('-webkit-flex-direction', 'row');
            $('.skills-container').css('-webkit-justify-content', 'center');
            $('.skills-container').css('flex-direction', 'row');
            $('.skills-container').css('justify-content', 'center');
            $('.skills-container').css('align-items', 'center');
            $('.skills-container').css('-webkit-align-items', 'center');
            $('.skills-container').css('min-width', '481px');
            $('.skill').css('fontSize', (fontSize * 0.40) + 'em');
            $('.skill').css('line-height', skillLineHeight + 'px');
            var buttonHeight = $('.show-hide-button').height();
            $('.show-hide-button').css('fontSize', (fontSize * 0.9) + 'em');
            $('.show-hide-button').css('min-width', (0.7 * buttonHeight) + 'px');
            $('#main').css('padding-top', '150px');
            $('#main').css('min-width', 'auto');
        } else {
            $('#header').css('-webkit-flex-direction', 'column');
            $('#header').css('flex-direction', 'column');
            $('#header').css('position', 'relative');
            $('#header').css('background-color', 'rgba(51, 32, 102, 0.83)');
            $('#header').css('height', 'auto');
            $('.bio-container').css('width', '100%');
            $('.bio-container').css('height', '150px');
            $('.bio-container').css('display', 'block');
            $('.bio-container').css('background-color', 'rgba(51, 32, 102, 0.83)');
            $('#name').css('fontSize', fontSize + 'em');
            $('.skills-container').css('min-width', '100px');
            $('.skills-container').css('display', 'block');
            $('.skills-container').css('background-color',
                'rgba(51, 32, 102, 0.83)');
            $('.skill').css('font-size', '0.65em');
            $('#main').css('padding-top', '0px');
            $('#main').css('min-width', '320px');
        }
        if ($(window).width() > 347) {
            $('h1').css('font-size', '32px');
        }
    }

    work.display = function() {
        var duties = [
        {
            "name": "Develop team-level communications plans",
            "relatedSkills": [bio.skills[0], bio.skills[8]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Recruit, hire, oversee staff",
            "relatedSkills": [bio.skills[0]],
            "relatedJobs": [work.jobs[0], work.jobs[3]]
        }, {
            "name": "Lead production teams",
            "relatedSkills": [bio.skills[0], bio.skills[2], bio.skills[
                5], bio.skills[4]],
            "relatedJobs": [work.jobs[0], work.jobs[2]]
        }, {
            "name": "Manage organization's video program",
            "relatedSkills": [bio.skills[0], bio.skills[2]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Manage state superintendent’s electronic newsletter, DPI-ConnectEd",
            "relatedSkills": [bio.skills[3], bio.skills[5], bio.skills[
                1], bio.skills[4]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Write news releases, articles, and other materials",
            "relatedSkills": [bio.skills[3], bio.skills[5]],
            "relatedJobs": [work.jobs[0], work.jobs[3]]
        }, {
            "name": "Create video pieces",
            "relatedSkills": [bio.skills[2], bio.skills[5], bio.skills[
                4], bio.skills[3]],
            "relatedJobs": [work.jobs[0], work.jobs[5], work.jobs[2]]
        }, {
            "name": "Record narration and voiceover",
            "relatedSkills": [bio.skills[2], bio.skills[6], bio.skills[
                8]],
            "relatedJobs": [work.jobs[0], work.jobs[5], work.jobs[2]]
        }, {
            "name": "Produce award-winning radio news segments for statewide broadcast",
            "relatedSkills": [bio.skills[2], bio.skills[4], bio.skills[
                6], bio.skills[3]],
            "relatedJobs": [work.jobs[4]]
        }, {
            "name": "Comic acting",
            "relatedSkills": [bio.skills[6], bio.skills[4]],
            "relatedJobs": [work.jobs[6], work.jobs[2]]
        }, {
            "name": "Craft and oversee wording and visual presentation of agency messages for videos",
            "relatedSkills": [bio.skills[0], bio.skills[3], bio.skills[
                8], bio.skills[2], bio.skills[4]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Draft quotations and talking points",
            "relatedSkills": [bio.skills[3], bio.skills[8]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Plan, execute communications campaigns",
            "relatedSkills": [bio.skills[0], bio.skills[5], bio.skills[
                    4], bio.skills[2], bio.skills[1], bio.skills[3],
                bio.skills[8]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Assemble, facilitate workgroups and committees",
            "relatedSkills": [bio.skills[0], bio.skills[5], bio.skills[
                6]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Serve as lead author for agency policy on social media",
            "relatedSkills": [bio.skills[0], bio.skills[8], bio.skills[
                1], bio.skills[4]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Speechwriting",
            "relatedSkills": [bio.skills[3], bio.skills[8]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Advise on social media, video, and emerging communications technologies",
            "relatedSkills": [bio.skills[0], bio.skills[8], bio.skills[
                4], bio.skills[1], bio.skills[5]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Communicate via social media",
            "relatedSkills": [bio.skills[8]],
            "relatedJobs": [work.jobs[3]]
        }, {
            "name": "Manage content for state superintendent’s and other areas of agency website",
            "relatedSkills": [bio.skills[0], bio.skills[1], bio.skills[
                3], bio.skills[5]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Capture video, audio, still photographs",
            "relatedSkills": [bio.skills[2], bio.skills[8]],
            "relatedJobs": [work.jobs[0], work.jobs[2], work.jobs[4]]
        }, {
            "name": "Serve as writer, photo researcher in creation of historical markers for permanent outdoor installation",
            "relatedSkills": [bio.skills[3], bio.skills[8], bio.skills[
                4], bio.skills[5]],
            "relatedJobs": [work.jobs[2]]
        }, {
            "name": "Adobe Creative Cloud (Premiere Pro, AfterEffects, Audition, Photoshop, Dreamweaver, Illustrator)",
            "relatedSkills": [bio.skills[2], bio.skills[7]],
            "relatedJobs": [work.jobs[0], work.jobs[2]]
        }, {
            "name": "Manage & edit web content",
            "relatedSkills": [bio.skills[0], bio.skills[3], bio.skills[
                1], bio.skills[7]],
            "relatedJobs": [work.jobs[0], work.jobs[4], work.jobs[5]]
        }, {
            "name": "HTML",
            "relatedSkills": [bio.skills[1], bio.skills[7]],
            "relatedJobs": [work.jobs[0], work.jobs[4], work.jobs[5],
                work.jobs[1]
            ]
        }, {
            "name": "CSS",
            "relatedSkills": [bio.skills[1], bio.skills[7]],
            "relatedJobs": [work.jobs[0], work.jobs[1]]
        }, {
            "name": "Drupal",
            "relatedSkills": [bio.skills[1], bio.skills[7]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Use in-house content management",
            "relatedSkills": [bio.skills[1], bio.skills[7]],
            "relatedJobs": [work.jobs[0], work.jobs[4], work.jobs[5]]
        }, {
            "name": "FTP",
            "relatedSkills": [bio.skills[1], bio.skills[7]],
            "relatedJobs": [work.jobs[4], work.jobs[5]]
        }, {
            "name": "Register & manage web domains",
            "relatedSkills": [bio.skills[1]],
            "relatedJobs": [work.jobs[0], work.jobs[2]]
        }, {
            "name": "Assist in media relations",
            "relatedSkills": [bio.skills[8]],
            "relatedJobs": [work.jobs[0]]
        }, {
            "name": "Oversee publicity strategy",
            "relatedSkills": [bio.skills[8], bio.skills[4], bio.skills[
                0]],
            "relatedJobs": [work.jobs[3]]
        }, {
            "name": "Work with contacts to secure print, broadcast, and online coverage",
            "relatedSkills": [bio.skills[8], bio.skills[5]],
            "relatedJobs": [work.jobs[3], work.jobs[2]]
        }, {
            "name": "Strategize & create publicity materials",
            "relatedSkills": [bio.skills[3], bio.skills[4], bio.skills[
                8]],
            "relatedJobs": [work.jobs[3]]
        }, {
            "name": "Research historical and contemporary topics",
            "relatedSkills": [bio.skills[3]],
            "relatedJobs": [work.jobs[2], work.jobs[5]]
        }, {
            "name": "Research contemporary topics",
            "relatedSkills": [bio.skills[3]],
            "relatedJobs": [work.jobs[4]]
        }, {
            "name": "Write informative, engaging, and/or entertaining scripts",
            "relatedSkills": [bio.skills[3], bio.skills[4], bio.skills[
                2]],
            "relatedJobs": [work.jobs[2], work.jobs[0], work.jobs[5]]
        }, {
            "name": "Establish lighthearted, enthusiastic tone in workgroup and on screen",
            "relatedSkills": [bio.skills[8], bio.skills[0], bio.skills[
                4], bio.skills[6]],
            "relatedJobs": [work.jobs[2]]
        }, {
            "name": "Develop and execute concepts for comedy and nonfiction television",
            "relatedSkills": [bio.skills[4], bio.skills[5], bio.skills[
                2]],
            "relatedJobs": [work.jobs[2]]
        }, {
            "name": "Arrange and publicize screenings",
            "relatedSkills": [bio.skills[8], bio.skills[0]],
            "relatedJobs": [work.jobs[2]]
        }, {
            "name": "FinalCut Pro",
            "relatedSkills": [bio.skills[2], bio.skills[7]],
            "relatedJobs": [work.jobs[2]]
        }, {
            "name": "Avid Media Composer",
            "relatedSkills": [bio.skills[2], bio.skills[7]],
            "relatedJobs": [work.jobs[5]]
        }, {
            "name": "Vegas Video",
            "relatedSkills": [bio.skills[2], bio.skills[7]],
            "relatedJobs": [work.jobs[2]]
        }, {
            "name": "Arrange and conduct interviews with experts and other external sources",
            "relatedSkills": [bio.skills[2], bio.skills[5], bio.skills[
                3]],
            "relatedJobs": [work.jobs[2], work.jobs[0], work.jobs[5]]
        }, {
            "name": "Arrange and conduct interviews with elected officials, legislators, and other external sources",
            "relatedSkills": [bio.skills[2], bio.skills[5], bio.skills[
                3]],
            "relatedJobs": [work.jobs[4]]
        }, {
            "name": "Create and produce new talk radio show as part of team",
            "relatedSkills": [bio.skills[2], bio.skills[5], bio.skills[
                4]],
            "relatedJobs": [work.jobs[4]]
        }, {
            "name": "Produce non-fiction television segments for statewide broadcast",
            "relatedSkills": [bio.skills[2], bio.skills[5], bio.skills[
                3]],
            "relatedJobs": [work.jobs[5]]
        }, {
            "name": "Instigate laughter: great, debilitating laughter",
            "relatedSkills": [bio.skills[6], bio.skills[8], bio.skills[
                4]],
            "relatedJobs": [work.jobs[6]]
        }, {
            "name": "Engage live audiences",
            "relatedSkills": [bio.skills[8], bio.skills[0], bio.skills[
                4], bio.skills[6]],
            "relatedJobs": [work.jobs[6]]
        }, {
            "name": "Improvise effectively",
            "relatedSkills": [bio.skills[8], bio.skills[6], bio.skills[
                4]],
            "relatedJobs": [work.jobs[6]]
        }, {
            "name": "Rely on trust, teamwork to solve tough problems",
            "relatedSkills": [bio.skills[5], bio.skills[0]],
            "relatedJobs": [work.jobs[6]]
        }, {
            "name": "Endure an elected official deliberately banging his" +
                " elbows on the microphone table as he answered a question " +
                "he apparently didn't want me to ask",
            "relatedSkills": [],
            "relatedJobs": [work.jobs[4]]
        }, {
            "name": "Experiment with some new platform called Facebook",
            "relatedSkills": [bio.skills[4], bio.skills[8]],
            "relatedJobs": [work.jobs[3]]
        }, {
            "name": "Develop an unexpected fervor for Finland",
            "relatedSkills": [],
            "relatedJobs": [work.jobs[5]]
        }, {
            "name": "Create dynamic, engaging websites",
            "relatedSkills": [bio.skills[1], bio.skills[4]],
            "relatedJobs": [work.jobs[1]]
        }, {
            "name": "Javascript",
            "relatedSkills": [bio.skills[1], bio.skills[7]],
            "relatedJobs": [work.jobs[1]]
        }, {
            "name": "Git & GitHub",
            "relatedSkills": [bio.skills[1], bio.skills[7]],
            "relatedJobs": [work.jobs[1]]
        }, {
            "name": "Hide a few Easter eggs, like this one, in my online resume",
            "relatedSkills": [bio.skills[1], bio.skills[4]],
            "relatedJobs": [work.jobs[1]]
        }];

        var currentJob;
        matchJobs = function(duty) {
            if (duty === currentJob) {
                return true;
            }
        };
        for (jobsIndex = 0; jobsIndex < work.jobs.length; jobsIndex++) {
            currentJob = work.jobs[jobsIndex];
            $('#workExperience').append(HTMLworkStart);
            // Create two options for first line of each work-entry - because the freelancer entry does not have 'employer' property.
            if (work.jobs[jobsIndex].employer) {
                $('.work-entry:last').append((HTMLworkEmployer.replace('%data%',
                    work.jobs[jobsIndex].employer)) + (HTMLworkTitle.replace(
                    '%data%', work.jobs[jobsIndex].title)));
            } else {
                $('.work-entry:last').append(HTMLworkTitle.replace('%data%',
                    work.jobs[jobsIndex].title));
            }
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%',
                work.jobs[jobsIndex].location) + HTMLworkYears.replace(
                '%data%', work.jobs[jobsIndex].dates));
            // Add all related job duties to the work-entry -- instead of a description.
            for (dutiesIndex = 0; dutiesIndex < duties.length; dutiesIndex++) {
                if (duties[dutiesIndex].relatedJobs.some(matchJobs)) {
                    var formattedDuty = HTMLDuty.replace('%%data%%', duties[
                        dutiesIndex].name);
                    formattedDuty = formattedDuty.replace('%data%', duties[
                        dutiesIndex].relatedSkills);
                    formattedDuty = formattedDuty.replace('%data%', duties[
                        dutiesIndex].relatedSkills);
                    $('.work-entry:last').append(formattedDuty);
                }
            }
        }
    };

    projects.display = function() {
        for (projectIndex = 0; projectIndex < projects.projects.length; projectIndex++) {
            $('#projects').append(HTMLprojectStart);
            var formattedProjectName = HTMLprojectTitle.replace('%data%',
                projects.projects[projectIndex].title);
            formattedProjectName = formattedProjectName.replace('#', projects.projects[
                projectIndex].link);
            var formattedProjectChallenge = HTMLprojectChallenge.replace(
                '%data%', projects.projects[projectIndex].description);
            var formattedProjectRole = HTMLprojectRole.replace('%data%',
                projects.projects[projectIndex].role);
            $('.project-entry:last').append(formattedProjectName +
                formattedProjectRole + formattedProjectChallenge);
            for (projectImageIndex = 0; projectImageIndex < projects.projects[
                    projectIndex].images.length; projectImageIndex++) {
                var formattedProjectImage = HTMLprojectImage.replace('%data%',
                    projects.projects[projectIndex].images[
                        projectImageIndex]);
                formattedProjectImage = formattedProjectImage.replace('#',
                    projects.projects[projectIndex].link);
                $('.project-entry:last').append(formattedProjectImage);
            }
        }
    };

    education.display = function() {
        for (schoolsIndex = 0; schoolsIndex < education.schools.length; schoolsIndex++) {
            var formattedSchoolDegree;
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace('%data%',
                education.schools[schoolsIndex].name);
            if (education.schools[schoolsIndex].degree) {
                formattedSchoolDegree = HTMLschoolDegree.replace('%data%',
                    education.schools[schoolsIndex].degree);
            } else {
                formattedSchoolDegree = "</a></span>";
            }
            var formattedSchoolDates = HTMLschoolDates.replace('%data%',
                education.schools[schoolsIndex].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',
                education.schools[schoolsIndex].location);
            $('.education-entry:last').append(formattedSchoolName +
                formattedSchoolDegree +
                formattedSchoolDates + formattedSchoolLocation);
            if (education.schools[schoolsIndex].majors[0]) {
                var formattedSchoolMajor = HTMLschoolMajor.replace('%data%',
                    education.schools[schoolsIndex].majors);
                $('.education-entry:last').append(formattedSchoolMajor);
            }
            var formattedSchoolNotable = HTMLschoolNotable.replace('%data%',
                education.schools[schoolsIndex].notable);
            $('.education-entry:last').append(formattedSchoolNotable);
        }
        $('#education').append(HTMLonlineClasses);
        for (onlinecourseIndex = 0; onlinecourseIndex < education.onlineCourses
            .length; onlinecourseIndex++) {
            $('#education').append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%',
                education.onlineCourses[onlinecourseIndex].title);
            formattedOnlineTitle = formattedOnlineTitle.replace('#', education.onlineCourses[
                onlinecourseIndex].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',
                education.onlineCourses[onlinecourseIndex].school);
            var formattedOnlineDates = HTMLonlineDates.replace('%data%',
                education.onlineCourses[onlinecourseIndex].dates);
            $('.education-entry:last').append(formattedOnlineTitle +
                formattedOnlineSchool + formattedOnlineDates);
        }
    };

    bio.display();

    work.display();

    projects.display();

    education.display();

    $("#mapDiv").append(googleMap);