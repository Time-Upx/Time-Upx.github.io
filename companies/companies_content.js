const json_names = ["portalsolar", "automatize_solucoes", "ecopower"]

async function ler_json(json_name) {
    const response = await fetch(`companies/json_data/${json_name}.json`)
    const data = await response.json()
    return data
}

async function get_json_data() {
    let companies_data = {}

    for (const json_name of json_names) {
        let result = await ler_json(json_name)
        companies_data[json_name] = result
    }

    return companies_data
}

export const companies_data = await get_json_data()