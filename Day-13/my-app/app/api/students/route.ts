const students = [
  {
    name: "Nikhil",
    marks: 100,
    isPresent: false,
  },
  {
    name: "John",
    marks: 10,
    isPresent: true,
  },
  {
    name: "Doe",
    marks: 50,
    isPresent: false,
  },
  {
    name: "Ram",
    marks: 93,
    isPresent: true,
  },
  {
    name: "Raina",
    marks: 94,
    isPresent: false,
  },
  {
    name: "Rishi",
    marks: 91,
    isPresent: false,
  },
  {
    name: "Radhe",
    marks: 92,
    isPresent: false,
  },
];

// GET
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");

  if (name) {
    const student = students.find((student) => student.name === name);

    return Response.json({
      status: "success",
      student,
    });
  }

  return Response.json({
    status: "success",
    students,
  });
}

// POST
export async function POST(request: Request) {
  const user = await request.json();

  students.push(user);

  return Response.json({
    status: "Student Created Successfully",
    student: user,
    students,
  });
}

// PUT
export async function PUT(request: Request) {
  const updatedStudent = await request.json();

  const index = students.findIndex(
    (student) => student.name === updatedStudent.name,
  );

  if (index === -1) {
    return Response.json({
      status: 404,
      error: "Student Not Found",
    });
  }

  students[index] = updatedStudent;

  return Response.json({
    status: "Student Updated Successfully",
    student: students[index],
  });
}

// PATCH
export async function PATCH(request: Request) {
  const data = await request.json();

  const student = students.find((student) => student.name === data.name);

  if (!student) {
    return Response.json({
      status: 404,
      error: "Student Not Found",
    });
  }

  Object.assign(student, data);

  return Response.json({
    status: "Student Partially Updated",
    student,
  });
}

// DELETE
export async function DELETE(request: Request) {
  const body = await request.json();

  const filteredStudents = students.filter(
    (student) => student.name !== body.name,
  );

  if (filteredStudents.length === students.length) {
    return Response.json({
      status: 404,
      error: "Student Not Found",
    });
  }

  students.length = 0;
  students.push(...filteredStudents);

  return Response.json({
    status: 200,
    message: "Student Deleted Successfully",
    students,
  });
}
