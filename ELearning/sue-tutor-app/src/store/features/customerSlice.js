import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        info: {
            name: '',
            middleName: '',
            surName: '',
            age: 0,
            gender: '',
            contact: {
                email: '',
                phoneNumber: '',
                location: ''
            },
            academic: {
                qualification: '',
                year: '',
                preferedSubjects: []
            }
        }
    },
    reducers: {
        setName: (state, name) => {
            state.info.name = name.payload
        },
        setMiddleName: (state, middleName) => {
            state.info.middleName = middleName.payload
        },
        setSurName: (state, surName) => {
            state.info.surName = surName.payload
        },
        setAge: (state, age) => {
            state.info.age = age.payload
        },
        setGender: (state, gender) => {
            state.info.gender = gender.payload
        },
        setEmail: (state, email) => {
            state.info.contact.email = email.payload
        },
        setPhoneNumber: (state, phoneNumber) => {
            state.info.contact.phoneNumber = phoneNumber.payload
        },
        setLocation: (state, location) => {
            state.info.contact.location = location.payload
        },
        setAcademicQualification: (state, qualification) => {
            console.log(qualification);
            state.info.academic.qualification = qualification.payload
        },
        setAcademicYear: (state, year) => {
            state.info.academic.year = year.payload
        },
        setAcademicPreeredSubjects: (state, sub) => {
            state.info.academic.preferedSubjects = [...sub.payload]
        }
    }
})

// Action creators are generated for each case reducer function
export const { setName, setMiddleName, setSurName, setAge, setGender,
    setEmail, setPhoneNumber, setLocation,
    setAcademicQualification, setAcademicYear,
    setAcademicPreeredSubjects } = customerSlice.actions

export default customerSlice.reducer