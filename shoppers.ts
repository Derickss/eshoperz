export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      category: {
        Row: {
          action: string | null
          active: boolean | null
          created_at: string | null
          description: string | null
          id: number
          image: string | null
          title: string | null
        }
        Insert: {
          action?: string | null
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          title?: string | null
        }
        Update: {
          action?: string | null
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          title?: string | null
        }
        Relationships: []
      }
      courier: {
        Row: {
          address: string | null
          contact: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          gender: string | null
          id: number
          image: string | null
          sir_name: string | null
          vehicle: string | null
        }
        Insert: {
          address?: string | null
          contact?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          id?: number
          image?: string | null
          sir_name?: string | null
          vehicle?: string | null
        }
        Update: {
          address?: string | null
          contact?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          id?: number
          image?: string | null
          sir_name?: string | null
          vehicle?: string | null
        }
        Relationships: []
      }
      order: {
        Row: {
          action: string | null
          active: boolean | null
          amount: number | null
          courier: number | null
          created_at: string | null
          customer: string | null
          destination: string | null
          id: number
          prices: number | null
          quantiy: number | null
          status: string | null
          store: number | null
        }
        Insert: {
          action?: string | null
          active?: boolean | null
          amount?: number | null
          courier?: number | null
          created_at?: string | null
          customer?: string | null
          destination?: string | null
          id?: number
          prices?: number | null
          quantiy?: number | null
          status?: string | null
          store?: number | null
        }
        Update: {
          action?: string | null
          active?: boolean | null
          amount?: number | null
          courier?: number | null
          created_at?: string | null
          customer?: string | null
          destination?: string | null
          id?: number
          prices?: number | null
          quantiy?: number | null
          status?: string | null
          store?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_courier_fkey"
            columns: ["courier"]
            referencedRelation: "courier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_customer_fkey"
            columns: ["customer"]
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_prices_fkey"
            columns: ["prices"]
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_store_fkey"
            columns: ["store"]
            referencedRelation: "store"
            referencedColumns: ["id"]
          }
        ]
      }
      product: {
        Row: {
          action: string | null
          active: boolean | null
          category: number | null
          created_at: string | null
          description: string | null
          discount: number | null
          id: number
          image: string | null
          name: string | null
          price: number | null
          store: number | null
        }
        Insert: {
          action?: string | null
          active?: boolean | null
          category?: number | null
          created_at?: string | null
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          name?: string | null
          price?: number | null
          store?: number | null
        }
        Update: {
          action?: string | null
          active?: boolean | null
          category?: number | null
          created_at?: string | null
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          name?: string | null
          price?: number | null
          store?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_category_fkey"
            columns: ["category"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_store_fkey"
            columns: ["store"]
            referencedRelation: "store"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      roles: {
        Row: {
          created_at: string | null
          id: number
          role: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          role?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          role?: string | null
        }
        Relationships: []
      }
      store: {
        Row: {
          action: string | null
          active: boolean | null
          address: string | null
          contact: string | null
          created_at: string | null
          email: string | null
          id: number
          logo: string | null
          title: string | null
        }
        Insert: {
          action?: string | null
          active?: boolean | null
          address?: string | null
          contact?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          logo?: string | null
          title?: string | null
        }
        Update: {
          action?: string | null
          active?: boolean | null
          address?: string | null
          contact?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          logo?: string | null
          title?: string | null
        }
        Relationships: []
      }
      user: {
        Row: {
          action: string | null
          active: boolean | null
          avatar: string | null
          contact: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          gender: string | null
          id: string
          location: string | null
          sir_name: string | null
        }
        Insert: {
          action?: string | null
          active?: boolean | null
          avatar?: string | null
          contact?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          id: string
          location?: string | null
          sir_name?: string | null
        }
        Update: {
          action?: string | null
          active?: boolean | null
          avatar?: string | null
          contact?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          id?: string
          location?: string | null
          sir_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_id_fkey"
            columns: ["id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      continents:
        | "Africa"
        | "Antarctica"
        | "Asia"
        | "Europe"
        | "Oceania"
        | "North America"
        | "South America"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

