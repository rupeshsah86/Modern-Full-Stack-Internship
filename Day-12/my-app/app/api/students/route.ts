// GET route
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
    marks: 90,
    isPresent: true,
  },
  {
    name: "Raina",
    marks: 90,
    isPresent: true,
  },
  {
    name: "Rishi",
    marks: 90,
    isPresent: true,
  },
  {
    name: "Radhe",
    marks: 90,
    isPresent: true,
  }
];

export async function GET() {
  console.log("students-", students);
  return Response.json({
    status: "success",
    students,
  });
}

export async function POST(request: Request) {
  const user = await request.json();
  console.log("user:", user);
  return Response.json({
    status: "New User created",
  });
}

export async function PUT(request: Request) {
  const updatedStudent = await request.json();

  students[0] = updatedStudent;

  return Response.json({
    status: "Student Updated",
    student: students[0],
  });
}

export async function PATCH(request: Request) {
  const data = await request.json();

  const student = students.find(
    (student) => student.name === data.name
  );

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

export async function DELETE(request: Request) {
  const body = await request.json();

  const filteresStudents = students.filter((student) => {
    return student.name !== body.name;
  });

  if (filteresStudents.length === students.length) {
    return Response.json({
      status: 404,
      error: "Not Found",
    });
  }

  return Response.json({
    status: 204,
    message: "Resource deleted Successfully!",
    students: filteresStudents,
  });
}
