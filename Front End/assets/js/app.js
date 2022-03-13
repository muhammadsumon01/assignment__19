let memberItemContainer = document.querySelector(".developer__item__container");
let devName = document.querySelector(".devAddForm #devName");
let devTitle = document.querySelector(".devAddForm #devTitle");
let devImg = document.querySelector(".devAddForm #devImg");
let devLocation = document.querySelector(".devAddForm #devLocation");
let devAge = document.querySelector(".devAddForm #devAge");
let devIncome = document.querySelector(".devAddForm #devIncome");
let devItemRemove = document.querySelectorAll(".devItemRemove");
let skillsSelect = document.querySelector('.devAddForm select[name="devSkills"]');


// Add All Skill to form skill option from From Api
axios.get('http://localhost:9270/skill').then(skill => {
    skill.data.forEach(skill => {
        skillsSelect.insertAdjacentHTML("beforeend", `
        <option value="${skill.id}">${skill.name}</option>
        `)

    })
}).catch(err => {
    document.querySelector(".developer__item__container").innerHTML = `
    <h1 class="text mt-4 h2">Not getting any response from server !! Please run
    the server first !!
    </h1>
    `;
})

https://github.com/muhammadsumon01/assignment__01
git remote set-url origin https://github.com/muhammadsumon01/assignment__01
git remote set-url origin https://muhammadsumon01@github.com/muhammadsumon01/assignment__01.git
let isChecked = document.querySelector("#generateData:checked");

function formInputValueGenerate() {

    const formData = {

        devName: [
            "Muhammad Sumon",
            "Arif Ahmed",
            "Asik Rahman",
            "Imran Mahmud",
            "Rimon Hossen",
            "Omar Faruk",
            "Hasan Mahmud",
            "Huzaifa Rahman",
            "Asraf Ahmed",
            "Asid Khan",
            "Muhammad Faruk",
        ],
        devTitle: [
            "Mern Stack Dev",
            "Python Dev",
            "Php Dev",
            "Wordpress Dev",
            "GO Dev",
            "Full Stack Dev",
            "Javascript Dev",
            "Kotlin Dev",
            "Flutter Dev",
        ],
        devImg: [
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1507081323647-4d250478b919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

        ],
        devLocation: [
            "Mirpur",
            "Mohammadpur",
            "Shamoli",
            "Banani",
            "Lalmatia",
            "Dhanmondi",
            "Bosila",
            "America",
            "Russia",
            "Koria",
            "Turkey",
        ],
        devAge: Math.floor(Math.random() * (55 - 15 + 1) + 15),
        devIncome: Math.floor(Math.random() * (8445 - 863 + 1) + 863),

    }

    devName.value = formData.devName[Math.floor(Math.random() * formData.devName.length)];
    // devTitle.value = formData.devTitle[Math.floor(Math.random() * formData.devTitle
    //     .length)];
    devImg.value = formData.devImg[Math.floor(Math.random() * formData.devImg.length)];
    devLocation.value = formData.devLocation[Math.floor(Math.random() * formData.devLocation
        .length)];
    devAge.value = formData.devAge;
    devIncome.value = formData.devIncome;

}

// Generate Form Data if generate checkbox == checked
document.querySelector("#generateData").addEventListener("change", function () {
    isChecked = this.value;
    document.querySelector("#generateData:checked") ? formInputValueGenerate() : null;
})
document.querySelector("#generateData:checked") ? formInputValueGenerate() : null;

// Show Dev info in Developer List From Api
function showdevs() {
    axios.get('http://localhost:9270/devs').then(dev => {

        let teamMemberList = '';
        dev.data.forEach(dev => {
            teamMemberList += `
         <div class="developer__item">
            <div class="position-relative">
                <img src="assets/images/img__bg.png" alt="pattern">
                <img src="${dev.image}"
                    alt="developer__image">
                <img src="assets/images/img_bottom_shape.png" alt="img__bottom__shape">
            </div>
            <h2 class="developer__name">${dev.name}</h2>
            <button class="devItemRemove" onclick="devRemove(${dev.id})" ide="${dev.id}"><i class="border rounded fas fa-times"></i></button>
            <button class="devEdit" onclick="devEdit(${dev.id})" ide="${dev.id}" ><i class="border rounded fas fa-edit"></i></button>
            <div class="developer__desc">
                <div>
                    <p class="developer__desc__item title">${dev.skillId}</p>
                    <p class="developer__desc__item age">${dev.age} Year Old</p>
                </div>
                <div>

                    <p class="developer__desc__item location">${dev.location}</p>
                    <p class="developer__desc__item income">${incomeSort(
                        dev.yearlyIncome,
                      "$"
                    )}/Year</p>
                </div>

            </div>
         </div>`;
        })
        memberItemContainer.innerHTML = teamMemberList;

    }).then(res => {

        // Get Skill Id From Dev Card Then convert it into skill name
        document.querySelectorAll(".developer__desc__item.title").forEach(sd => {
            axios.get(`http://localhost:9270/skill/${sd.innerHTML}`).then(skill => {
                sd.innerHTML = skill.data.name;
            })
        })
    })
}
showdevs();

// Dev info add on form submit
function devAdd() {

    axios.post('http://localhost:9270/devs', {
        method: 'post',
        id: "",
        name: devName.value,
        image: devImg.value,
        skillId: skillsSelect.value,
        location: devLocation.value,
        age: devAge.value,
        yearlyIncome: devIncome.value
    }).then(function (respons) {
        console.log(respons);

        showdevs();

        (document.querySelector("#generateData:checked") ? formInputValueGenerate() : null)

    })

}

// To Remove One Dev Info from list
function devRemove(id) {
    axios.delete(`http://localhost:9270/devs/${id}`).then(res => {
        showdevs();
    });

}

// Edit Devs Data
function devEdit(id) {

    document.querySelectorAll(".developer__item button.devEdit").forEach(button => {
        if (button.getAttribute("ide") == id) {
            axios.get(`http://localhost:9270/devs/${id}`).then(data => {

                // Remove Border from all dev info without selected dev info
                document.querySelectorAll(".developer__item").forEach(devItem => {
                    devItem.style.border = "none ";
                });
                button.parentElement.style.border = "1px solid rgb(41, 141, 10)";

                // Add all skills to form from api when devs info edit == clicked
                let skillOptions = '';
                axios.get(`http://localhost:9270/skill`).then(data => {

                    data.data.forEach(data => {
                        skillOptions += `
                        <option class="user-select-none" value="${data.id}">${data.name}</option>
                        `
                    })
                    document.querySelector(".editDevInfoForm select[name='devSkills']").insertAdjacentHTML("beforeend", skillOptions);
                })

                // Set clicked dev skill to form dev skill
                axios.get(`http://localhost:9270/skill/${data.data.skillId}`).then(wr => {
                    document.querySelectorAll(".editDevInfoForm option[value]").forEach(lai => {
                        if (lai.getAttribute("value") == wr.data.id) {
                            lai.setAttribute("selected", "true")
                        }
                    })

                })

                // Active Dev Info Edit Form
                document.querySelector(".teamMember__container").classList.add("editMode");
                document.querySelector(".editDevInfoForm").innerHTML = `
                            <div class="border p-2">
                                <label class="text-center w-100">Edit Devs Info</label>
                            </div>

                            <input required value="${data.data.name}" id="devName" class="w-100 p-2 my-2"
                                placeholder="Developer Name" type="text">

                            <select class="form-select" name="devSkills" id="devTitle" required>
                                <option class="user-select-none" value="" disabled selected>Select Devs Skill</option>
                            </select>

                            <input required value="${data.data.image}" id="devImg" class="w-100 p-2 my-2" placeholder="Developer image"
                                type="text">

                            <input value="${data.data.location}" required id="devLocation" class="w-100 p-2 my-2"
                                placeholder="Developer Location" type="text">

                            <input value="${data.data.age}" required id="devAge" class="w-100 p-2 my-2" placeholder="Developer Age"
                                type="number">

                            <input value="${data.data.yearlyIncome}" required id="devIncome" class="w-100 p-2 my-2"
                                placeholder="Developer Income Ex- 4200$" type="text">

                            <input class="w-100 p-2 my-2 btn btn-success" value="Save Changes" type="submit">
                `;

            })

        }
    })

    let editForm = document.querySelector(".editDevInfoForm");

    editForm.onsubmit = () => {

        let edevName = editForm.querySelector("#devName");
        let edevTitle = editForm.querySelector("#devTitle");
        let edevImg = editForm.querySelector("#devImg");
        let edevLocation = editForm.querySelector("#devLocation");
        let edevAge = editForm.querySelector("#devAge");
        let edevIncome = editForm.querySelector("#devIncome");

        axios.patch(`http://localhost:9270/devs/${id}`, {
            name: edevName.value,
            skillId: edevTitle.value,
            image: edevImg.value,
            location: edevLocation.value,
            age: edevAge.value,
            yearlyIncome: edevIncome.value
        }).then(res => {

            showdevs();
            document.querySelector(".teamMember__container").classList.remove("editMode");
        })
    }

}