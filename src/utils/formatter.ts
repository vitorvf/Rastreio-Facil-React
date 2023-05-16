// import moment from "moment";

// export function relativeDateFormatter(date: string | undefined) {
//   if (date === undefined) {
//     return "";
//   } else {
//     return moment(date).fromNow();
//   }
// }

import moment from "moment";

export function relativeDateFormatter(
  date: string | undefined,
  formatOption: string = "fromNow"
) {
  if (date === undefined) {
    return "";
  } else {
    const momentDate = moment(date);

    if (formatOption === "fromNow") {
      return momentDate.fromNow();
    } else if (formatOption === "customFormat") {
      return momentDate.format("DD/MM/YYYY HH:mm");
    } else {
      // Opção inválida, retornar a data em branco
      return "";
    }
  }
}
