const router = require("express").Router();
let Student = require("../models/Student.js");

router.route("/add").post((req, res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })
    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch(()=>{
        console.log(err);
    })
})


router.route("/").get((req, res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/update/:id").put( async (req, res)=>{
    let userID = req.params.id;
    const {name, age, gender} = request.body;

    const updateStudents = {
        name,
        age,
        gender
    }
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
        res.status(200).send({status : "User Updated", user: update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;
    await Student.findByIdAndDelete (userId).then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})


router.route("/get/:id").get(async (req, res)=> {
    let userId = req.params.id;
    const user = await Student.findById(userId).then(()=>{
        res.status(200).send({status: "User fetched", user: user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;