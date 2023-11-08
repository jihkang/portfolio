export function formDataToJson(formData: FormData): string {
  let obj: any = {};

  formData.forEach((value, key) => {
    obj[key] = value;
  });
  return JSON.stringify(obj);
}
