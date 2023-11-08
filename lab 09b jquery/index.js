$(document).ready(() => {
  data.levels.forEach(level =>{
    $("#table_curriculum_body").append(`<tr class="level_row"><td  colspan="5"fcccccccc>${level.name}</td></tr>`);
    level.courses.forEach(course => {
      $("#table_curriculum_body").append(`<tr class="course_row"><td>${course.name}</td>
                                        <td>${course.description}</td>
                                        <td>${course.code}</td>
                                        <td>${course.credits}</td>
                                        <td>${course.type}</td></tr>`);
    });
  });
})