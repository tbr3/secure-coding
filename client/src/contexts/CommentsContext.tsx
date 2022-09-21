import { createContext, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { Comment } from "../hooks/useGetComments";

interface CommentsContextInterface {
    comments: Comment[]
    postId: string | null
    refresh: () => void
}

export const CommentsContext = createContext<CommentsContextInterface>({ comments: [], postId: null, refresh: () => { } });

interface CommentsProviderProps {
    postId: string
}

export const CommentsProvider = (props: PropsWithChildren<CommentsProviderProps>) => {
    const [comments, setComments] = useState<CommentsContextInterface['comments']>([])

    const refresh = useCallback(() => {
        fetch(`/api/posts/${props.postId}/comments`).then(async response => {
            if (!response.ok) throw new Error('Could not fetch comments.')
            const result = await response.json()
            setComments(result)
        })
    }, [props.postId])

    useEffect(() => {
        refresh()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <CommentsContext.Provider value={{ comments, postId: props.postId, refresh }}>
            {props.children}
        </CommentsContext.Provider>
    )
}