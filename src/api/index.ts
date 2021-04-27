export async function fetchCourse(): Promise<{ course: number }> {
  const response = await fetch("http://localhost:8080/course");
  const data = await response.json();
  return data;
}
