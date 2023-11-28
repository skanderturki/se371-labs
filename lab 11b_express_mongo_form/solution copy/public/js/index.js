const delete_company = async (company_code) => {
  swal(`Are you sure you want to delete Company with code ${company_code}?`, {
    dangerMode: true,
    buttons: true,
  }).then(async (answer) => {

    await swal("Success!", `You deleted the company ${result._id}!`, "success");
    window.location.href = "/";
  });
};

const add_company = async () => {

};

const update_company = async (company_code) => {

};