const delete_company = async (company_code) => {
  swal(`Are you sure you want to delete Company with code ${company_code}?`, {
    dangerMode: true,
    buttons: true,
  }).then(async (answer) => {
    if (!answer) return;

    const result = await fetch(`/v1/companies/code/${company_code}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(result);
    await swal("Success!", `You deleted the company ${result._id}!`, "success");
    window.location.href = "/";
  });
};

const add_company = async () => {
  const code = document.getElementById("code").value;
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const description = document.getElementById("description").value;
  const capital = document.getElementById("capital").value;
  const owner = document.getElementById("owner").value;

  const result = await fetch(
    `/v1/companies/code/${code}/name/${name}/address/:${address}/description/${description}/capital/${capital}/owner/${owner}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  await swal("Success!", `You added the company ${code}!`, "success");
  window.location.href = "/";
};

const update_company = async (company_code) => {
  const name = document.getElementById("name_td").textContent;
  const address = document.getElementById("address_td").textContent;
  const description = document.getElementById("description_td").textContent;
  const capital = document.getElementById("capital_td").textContent;
  const owner = document.getElementById("owner_td").textContent;

  const result = await fetch(
    `/v1/companies/code/${company_code}/name/${name}/address/${address}/description/${description}/capital/${capital}/owner/${owner}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  await swal("Success!", `You updated the company ${code}!`, "success");
  window.location.href = "/";
};