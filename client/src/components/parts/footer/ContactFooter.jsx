import { StyledContactFooter } from "./StyledContactFooter";
// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';

const ContactFooter = ({ name, info, email, linkedin, github, img }) => {
    return (
        <StyledContactFooter className={name}>
            <h1 className="developer-name">{name}</h1>
            <h2 className="developer-info">{info}</h2>
            <img className="developer-image" src={img} alt={`${name} img`} />
            <div className="contact-icons-box">
                <a href={`mailto:${email}`}>email
                    {/* <EmailIcon className="contact-icon" /> */}
                </a>
                <a target="_blank" rel="noreferrer" href={linkedin}>linkedin
                    {/* <LinkedInIcon className="contact-icon" /> */}
                </a>
                <a target="_blank" rel="noreferrer" href={github}>github
                    {/* <GitHubIcon className="contact-icon" /> */}
                </a>
            </div>
        </StyledContactFooter>
    )
};

export default ContactFooter;