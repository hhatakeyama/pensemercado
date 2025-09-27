'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import api from '@/utils/api'
import useFetch from '@/hooks/useFetch'

const cookieTokenString = 'pense-mercado-api-session'

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

function useProvideAuth() {
  // States
  const [loading, setLoading] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [isValidating, setIsValidating] = useState(null)

  // Fetch
  const { data: userData, isValidating: userIsValidating, mutate: userMutate } = useFetch(
    ['/me'], { revalidateOnFocus: false }
  )

  // Login with credentials
  const login = async (credentials) => {
    setLoading(true)
    await api.get('/sanctum/csrf-cookie')
    await api
      .post('/api/login', {
        email: credentials.email,
        password: credentials.password
      })
      .then(() => setIsAuthenticated(true))
      .catch(error => { throw error })
      .finally(() => setLoading(false))
    return response
  }

  const register = async (newValues) => {
    setLoading(true)
    return await api
      .post('/api/site/clients', {
        ...newValues,
        ...(newValues ? { password_confirmation: newValues.confirmPassword } : {})
      })
      .then(() => setIsAuthenticated(true))
      .catch(error => { throw error })
      .finally(() => setLoading(false))
  }

  const updateUser = async (newValues) => {
    setLoading(true)
    return await api
      .patch(`/api/site/clients/${userData?.data?.id}`, {
        name: newValues.name,
        email: newValues.email,
        picture: newValues.picture,
        ...(newValues.password ? { password: newValues.password } : {}),
        ...(newValues.password ? { password_confirmation: newValues.confirmPassword } : {}),
      })
      .then(() => userMutate())
      .catch(error => {
        return { error: error?.response?.data?.message || 'Ocorreu um erro inesperado. Tente novamente mais tarde' }
      })
      .finally(() => setLoading(false))
  }

  // Logout user from API
  const logout = async () => {
    try {
      await api.post('/api/logout')
    } finally {
      removeCookie(cookieTokenString)
      removeStorage('services')
      setIsAuthenticated(false)
    }
  }

  // Send reset password link
  const forgotPassword = async (email) => {
    const response = await api.post('/api/password-reset', { email })
    return response
  }

  // Reset password
  const resetPassword = async (password, uidb64, hash) => {
    const response = await api.post('/api/password-reset/confirm', {
      password,
      uidb64,
      token: hash
    })
    return response
  }

  // Effects
  useEffect(() => {
    if (userData) setIsAuthenticated(true)
  }, [userData])

  useEffect(() => {
    setIsValidating(loading || userIsValidating)
  }, [loading, userIsValidating])

  return {
    login,
    logout,
    forgotPassword,
    resetPassword,
    register,
    updateUser,
    isAuthenticated,
    isValidating,
    userData: userData?.data || {}
  }
}

export default function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
