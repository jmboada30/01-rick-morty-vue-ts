import rickAndMortyApi from '@/api/rickAndMortyApi';
import { reactive } from 'vue';
import type {
  CharacterRickMorty,
  CharacterRickMortyResp,
} from './../characters/interfaces/character';

interface Store {
  characters: {
    list: CharacterRickMorty[];
    count: number;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string | null;
  };

  ids: {
    list: {
      [id: string]: CharacterRickMorty;
    };
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string | null;
  }

  // Character methods
  startLoadingCharacters: () => void;
  loadedCharacters: (characters: CharacterRickMorty[]) => void;
  loadCharactersFailed: (errorMessage: string) => void;
  
  // Ids methods
  startLoadingCharacter: () => void;
  checkIdInStore: (id: string) => boolean;
  loadedCharacter: (character: CharacterRickMorty) => void;
}

// Initial state
const characterStore = reactive<Store>({
  characters: {
    list: [],
    count: 0,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  },

  // Characters Methods
  async startLoadingCharacters() {
    const { data } = await rickAndMortyApi.get<CharacterRickMortyResp>(
      'character'
    );
    this.loadedCharacters(data.results);
  },

  loadedCharacters(characters: CharacterRickMorty[]) {
    this.characters = {
      list: characters,
      count: characters.length,
      isLoading: false,
      hasError: false,
      errorMessage: null,
    };
  },

  loadCharactersFailed(errorMessage: string) {
    this.characters = {
      list: [],
      count: 0,
      isLoading: false,
      hasError: true,
      errorMessage,
    };
  },

  ids: {
    list: {},
    isLoading: false,
    hasError: false,
    errorMessage: null,
  },

  // Ids Methods
  startLoadingCharacter() {
    this.ids = {
      ...this.ids,
      isLoading: true,
      hasError: false,
      errorMessage: null,
    }
  },

  checkIdInStore(id: string) { 
    return !!this.ids.list[id];
  },

  loadedCharacter(character: CharacterRickMorty) {
    this.ids.isLoading = false;
    this.ids.list[character.id] = character;
  },

});

characterStore.startLoadingCharacters();

export default characterStore;
