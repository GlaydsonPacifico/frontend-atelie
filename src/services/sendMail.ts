import axios from "axios"

export const sendoContactMail = async(
  name: string,
  senderMail: string,
  content:  string
)  => {
  const data = {
    name,
    senderMail,
    content
  }

  try {
    return await axios.post('/api/contact', data)
  } catch (error) {
    return error;
  }
}