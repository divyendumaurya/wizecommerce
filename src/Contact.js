import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
   <Wrapper>
    <h2 className="common-heading">
      Contact Us.
    </h2>
    
    {/* Map Section */}

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.080491276833!2d77.31855537522354!3d28.56734558703846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1692268747036!5m2!1sen!2sin"
     width="100%" 
     height="450"
      style={{border: 0 }}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className="container ">
        <div className="contact-form " >
          <form action="https://formspree.io/f/mwkdldjl" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" autoComplete="off" required />

            <input type="email" placeholder="Email" name="Email" autoComplete="off" required/>

            <textarea name="message"  cols="30" rows="10" autoComplete="off" required  placeholder="Enter your message"></textarea>

            <input type="submit" value="send" />

          </form>
        </div>
      </div>


    
  </Wrapper>
  );
};

export default Contact;
