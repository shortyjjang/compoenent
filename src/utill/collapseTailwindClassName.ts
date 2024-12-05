export const collapseTailwindClassName = (className: string | string[] = '') => {
    const classLists = Array.isArray(className) ? className.map(c => c.trim().split(' ')).flat() : className.trim().split(' ');
    const classMap: Record<string, string> = {};

    classLists.forEach((classList) => {
      classList.split(' ').forEach((className) => {
        const [base, modifier] = className.split('-');
        if (modifier) {
          classMap[base] = className; // 덮어쓰기
        } else {
          classMap[className] = className;
        }
      });
    });
  
    return Object.values(classMap).join(' ');
  }