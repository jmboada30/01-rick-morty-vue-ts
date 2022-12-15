import { ref, computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { CharacterRickMorty } from '../interfaces/character';

const characterSet = ref<{ [id: string]: CharacterRickMorty }>({});
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getCharacter = async (id: string) => {
  if (characterSet.value[id]) characterSet.value[id];

  const resp = await rickAndMortyApi.get<CharacterRickMorty>(
    `/character/${id}`
  );

  return resp.data;
};

const loadedCharacter = (data: CharacterRickMorty) => {
  hasError.value = false;
  errorMessage.value = null;
  characterSet.value[data.id] = data;
};

const useCharacter = (characterId: string) => {
  const { isLoading } = useQuery(
    ['characters', characterId],
    () => getCharacter(characterId),
    { onSuccess: loadedCharacter }
  );

  return {
    // properties
    errorMessage,
    hasError,
    isLoading,
    list: characterSet,

    // getters
    character: computed(() => characterSet.value[characterId]),

    // methods
  };
};

export default useCharacter;
