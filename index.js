var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profile-picture");
    // type assertion 
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("user-name");
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\ s+/g, "_"), "_cv.html");
        // create resume output
        var resumeOutput = "<h2>Resume</h2>\n\n    ".concat(profilePictureURL ? "   <div class=\"imgDesign\">\n            <img src = \"".concat(profilePictureURL, "\" alt =\"ProfilePicture\">\n        </div>") : '', "\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>Phone:</strong> ").concat(phone, " </p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p> \n    \n    <h3>Experience</h3>\n    <p> ").concat(experience, " </p>\n    \n    <h3>Skills</h3>\n    <p> ").concat(skills, " </p>\n    \n    \n    ");
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset = utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download Your 2024 Resume";
        // display resume output
        var resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove('hidden');
            // create conntainer for button
            var buttonContainer = document.createElement('div');
            buttonContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonContainer);
            //add download pdf button
            // const downloadButton = document.createElement('button');
            // downloadButton.textContent = "Download as PDF";
            // downloadButton.addEventListener("click " ,() =>{
            //     window.print();
            // });
            // buttonContainer.appendChild(downloadButton);
            var downloadButton = document.createElement('button');
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonContainer.appendChild(downloadButton);
            //ADD shareable link 
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "copy shreable link";
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert("shreable link copy to clipboard");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.log("failed to copy link:", err_1);
                            alert("ailed to copy link to clipboard.please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("The resume output elements are missing");
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});
