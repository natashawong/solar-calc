// Action Types
export const SUBMIT_INFO = 'SUBMIT_INFO'

// Action Creators
export function submitInfo(payload) { 
    console.log('heard')
    return { type: SUBMIT_INFO, payload }
}

