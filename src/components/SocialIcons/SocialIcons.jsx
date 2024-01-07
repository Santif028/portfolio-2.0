import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./SocialIcons.styles.css"

const SocialIconsComponent = () => {

    return (
        <ul className='socialDiv'>
            <li className='iconButton'>
                <IconButton
                    href="https://www.instagram.com/santi_edl/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon />
                </IconButton>
            </li>
            <li className='iconButton'>
                <IconButton
                    href="https://www.linkedin.com/in/santiago-ferreira-679640244/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon />
                </IconButton>
            </li>
            <li className='iconButton'>
                <IconButton
                    href="https://github.com/Santif028"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </IconButton>
            </li>
        </ul>
    );
};

export default SocialIconsComponent;