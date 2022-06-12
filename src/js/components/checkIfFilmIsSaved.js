//Перевірка чи фільм є в LocalStorrage
//filmID - це string
export function checkIfFilmIsSaved(filmID, localStorrageKey) {

    const rawsavedData = localStorage.getItem(localStorrageKey);
    if (!rawsavedData) {
        return false;
    }
  const savedData = JSON.parse(rawsavedData).results;
  
const isFilmInLocal = savedData.find(option=>option.id === filmID);
  if (isFilmInLocal) {
      // console.log('Film is here');
      return true;
  } else {
      // console.log('There is no film here');
      return false;
  }
}