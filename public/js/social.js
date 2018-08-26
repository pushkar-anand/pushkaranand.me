const socialLinks =
    {
        'twitter': 'https://twitter.com/Pushkar_Anand_0',
        'github': 'https://github.com/pushkar-anand',
        'linkedin': 'https://www.linkedin.com/in/anandpushkar088',
        'stack-overflow': 'https://stackoverflow.com/users/4257791/pushkar',
        'quora': 'https://www.quora.com/profile/Pushkar-Anand-14',
        'android': 'https://play.google.com/store/apps/dev?id=8597477603129692598',
        'instagram': 'https://instagram.com/pushkar.anand',
        'facebook': 'https://www.facebook.com/anandpushkar088',

    };

let html = '';

for (let key in socialLinks) {
    if (socialLinks.hasOwnProperty(key)) {
        html += '<a target="_blank" rel="noopener nofollow external" class="social-icon" href="' + socialLinks[key] + '" title="' + key + '" >' +
                '<i class="fab fa-' + key + '"></i></a>';
    }
}
$('div.social').html(html);