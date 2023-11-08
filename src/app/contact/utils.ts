export function formDataToObj(formData: FormData) {
  let obj: any = {};
  formData.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
}

export function formDataToJson(formData: FormData): string {
  return JSON.stringify(formDataToObj(formData));
}
