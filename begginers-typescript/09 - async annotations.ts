type LukeSkywalker = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
};

// either 1, 2 or 3 works
// 1. expect Promise<LukeSkywalker>
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
// 2. define data: LukeSkywalker
  const data: LukeSkywalker = await fetch(
        'https://swapi.dev/api/people/1',
    ).then((res) => {
        return res.json();
    });

// 3. (cast) as LukeSkywalker
    return data as LukeSkywalker;
};
