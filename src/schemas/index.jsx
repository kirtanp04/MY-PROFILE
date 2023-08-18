
import * as Yup from "yup"

export const formSchema = Yup.object({
    name:Yup.string().min(2).max(20).required("Enter Name *"),
    email:Yup.string().email().required("Enter Email *"),
    message:Yup.string().min(20).max(1000).required("Enter Your Message *"),
})