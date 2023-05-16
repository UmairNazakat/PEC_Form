
//   ######################################## Dynamic Form ###########################################################
    let fieldCount = 0;

    function addField() {
      const formFields = document.getElementById('formFields');

      const fieldContainer = document.createElement('div');
      fieldContainer.innerHTML = 
      `
 
<h5>Trainee</h5>
        <div class="formFieldsData">
        <!-- <div class="input-field">  -->
        <div class="row">
            <div class="input-field col s6">
                <input id="" name="traineeName[]" type="text" class="validate"
                    data-error="#e2" required>
                <label for="email${fieldCount}">Trainee Name</label>
                <div id="e2"></div>
            </div>
            <div class="input-field col s6">
                <input id="" name="traineeEmail[]" type="text" class="validate"
                    data-error="#e2" required>
                <label for="email">Trainee Email</label>
                <div id="e2"></div>
            </div>
        </div>


        <div class="row">
            <div class="input-field col s6">
                <input id="" name="TraineeNIC[]" type="text" class="validate"
                    data-error="#e2" required>
                <label for="email">Trainee NIC</label>
                <div id="e2"></div>
            </div>
            <div class="input-field col s6">
                <input id="" name="AreaOfExpertise[]" type="text" class="validate"
                    data-error="#e2" required>
                <label for="email">Area Of Expertise</label>
                <div id="e2"></div>
            </div>
        </div>


        <div class="row">
            <div class="input-field col s6">
                <input id="" name="designations[]" type="text" class="validate"
                    data-error="#e2" required>
                <label for="email">Designations</label>
                <div id="e2"></div>
            </div>
            <div class="input-field col s6">
                <input id="emailaaa" name="DOB[]" type="date" id="birthdate" class="datepicker validate" name="birthdate" data-error="#e5" placeholder=" " required>
                <!-- <label for="email">Trainee Date Of Birth</label> -->
                <div id="e2"></div>
            </div>
        </div>
    </div>
 
        `;

      formFields.appendChild(fieldContainer);
      fieldCount++;
    }

    document.getElementById('myForm').addEventListener('submit', function(e) {
      e.preventDefault();

      // Retrieve form data
      const formData = new FormData(this);
      for (let entry of formData.entries()) {
        console.log(entry[0] + ': ' + entry[1]);
      }
    });
//   ######################################## Dynamic Form ###########################################################
  

