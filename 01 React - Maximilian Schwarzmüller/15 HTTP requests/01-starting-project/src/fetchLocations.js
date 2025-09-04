export async function fetchLocations(url) {
    const fetchResult = await fetch(url)
    const result = await fetchResult.json()
    if (!fetchResult.ok) {
        throw new Error('Error during data fetch from server...')
    }
    return result
}


export const updateUserPlaces = async (places) => {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resData = await response.json()
    if (!response.ok) {
        throw new Error('Failed to update user data.')
    }
    return resData.message;
}

export async function fetchUserPlaces() {
    const fetchResult = await fetch('http://localhost:3000/user-places')
    const result = await fetchResult.json()
    if (!fetchResult.ok) {
        throw new Error('Error fetching user Places from server...')
    }
    return result.places
}