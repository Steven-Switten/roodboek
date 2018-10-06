export function getTemplateByName(templates: any, name?: string) {
  if (!templates) {
    return null;
  }
  const foundTemplate = templates.find((template: any) => template.getName() === name);
  if (foundTemplate) {
    return foundTemplate.template;
  }
  return null;
}
