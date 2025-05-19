import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Buttom, Input, Select, RTE } from '../index'
import { data, useNavigate } from 'react-router-dom'
import appwriteService from '../../services/appwrite/config'

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.slug || '',
            status: post?.status || 'active'
        }
    });

    const submit = async () => {
        if (post) {
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null
        }
        if (file) {
            appwriteService.deleteFile(post.featuredImage)
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
            ...data,
            featuredImage: file ? file.$id : undefined,
        })
        // Check it
        if (dbPost) {
            navigate(`/post/${dbPost.$id}`)
        } else {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;

                const dbPost = await appwriteService.
                    createPost({
                        ...data,
                        userId: userData.$id
                    });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }

        const slugTransform = useCallback((value) => {
            if (value)
                return value
                    .trim()
                    .toLowerCase()
                    .replace(/^[a-zA-Z\d\s]/g, '-')
                    .replace(/\s/g, '-')

            return ''
        }, []);

        useEffect(() => {
            const subscription = watch((value, { name }) => {
                if (name == 'title') {
                    setValue('slug', slugTransform(value.title, { shouldValidate: true }))
                }
            })

            return () => {
                subscription.unsubscribe();
            }
        }, [watch, slugTransform, setValue]);
    }

    const navigate = useNavigate();
    const userData = useSelector((state) => state.authReducer.userData)
    return (
        <form onSubmit={handleSubmit(submit)} className='d-flex flex-wrap'>
            <div className="row">
                <div className="col-8 px-2">
                    <Input
                        label="Input :"
                        placeholder="Title"
                        className='mb-4'
                        {...register('title', { required: true })}
                    />
                    <Input
                        label="Slug :"
                        placeholder="Slug"
                        className="mb-4"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <RTE
                        label="Content :"
                        name="content"
                        control={control}
                        defalutValue={getValues("content")}
                    />
                </div>
                <div className="col-4 px-2">
                    <Input
                        label='Featured Image :'
                        type='file'
                        className='mb-4'
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-100 mb-4">
                            <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className='rounded'
                            />
                        </div>
                    )}
                </div>
            </div>
        </form>
    )
}

export default PostForm
