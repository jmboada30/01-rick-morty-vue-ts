import { reactive } from 'vue';
import type { CharacterRickMorty } from './../characters/interfaces/character';

interface Store {
  characters: {
    list: CharacterRickMorty[];
    count: number;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string | null;
  };

  // Methods
  startLoadingCharacters: () => void;
  loadedCharacters: (characters: CharacterRickMorty[]) => void;
  loadCharactersFailed: (errorMessage: string) => void;
}

// Initial state
const characterStore = reactive<Store>({
    characters: {
        list: [],
        count: 0,
        isLoading: false,
        hasError: false,
        errorMessage: null,
    },

    // Methods
    startLoadingCharacters() {},
    loadedCharacters(characters: CharacterRickMorty[]) {},
    loadCharactersFailed(errorMessage: string) {},
});

export default characterStore;
