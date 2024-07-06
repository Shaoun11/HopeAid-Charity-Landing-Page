import React from 'react';
import Image from 'next/image'
import donation_image_1 from '../../../public/Donation_Image/3b74cfffe449fd4446c9247b07c95860.png'
import donation_image_2 from '../../../public/Donation_Image/558690cccd9233f7ec4b68dda1ad30b4.png'
import donation_image_3 from '../../../public/Donation_Image/e85c5935fe77bc4a5675868613904cbb.png'
const Donation = () => {
    return (
        <div id='donation' className='max-w-7xl mt-10 mx-auto'>
            <div className='lg:ml-0 ml-4 lg:mr-0 mr-4 md:flex justify-between'>
                <h1 className='lg:text-[48px] md:text-[30px] text-[24px] font-semibold text-[#171717]'>
                    Explore The Numerous <span className='md:block '></span> Programmes
                </h1>
                <p className='mt-3 text-[#525252] font-medium text-base'>
                    Your assistance is essential to us completing our <span className='md:block '></span> mission. You can help and change things in a lot of <span className='md:block '></span> different ways.
                </p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14'>
                {/* first card edit */}
                <div className=" bg-[#FFF] shadow-md md:w-96 w-[330px] mx-auto rounded-3xl">
                    <figure className="px-3 pt-3">
                        <Image
                            src={donation_image_2}
                            alt=""
                            className="md:w-[360px] md:h-[251px] object-cover rounded-3xl" />
                    </figure>
                    <div className="ml-4 mr-4">
                        <p className='flex text-sm gap-1 mt-4 text-[#525252] font-normal '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.66663 4.79163C6.32496 4.79163 6.04163 4.50829 6.04163 4.16663V1.66663C6.04163 1.32496 6.32496 1.04163 6.66663 1.04163C7.00829 1.04163 7.29163 1.32496 7.29163 1.66663V4.16663C7.29163 4.50829 7.00829 4.79163 6.66663 4.79163Z" fill="#525252" />
                                <path d="M13.3334 4.79163C12.9917 4.79163 12.7084 4.50829 12.7084 4.16663V1.66663C12.7084 1.32496 12.9917 1.04163 13.3334 1.04163C13.675 1.04163 13.9584 1.32496 13.9584 1.66663V4.16663C13.9584 4.50829 13.675 4.79163 13.3334 4.79163Z" fill="#525252" />
                                <path d="M17.0833 8.19995H2.91663C2.57496 8.19995 2.29163 7.91662 2.29163 7.57495C2.29163 7.23328 2.57496 6.94995 2.91663 6.94995H17.0833C17.425 6.94995 17.7083 7.23328 17.7083 7.57495C17.7083 7.91662 17.425 8.19995 17.0833 8.19995Z" fill="#525252" />
                                <path d="M13.3333 18.9583H6.66667C3.625 18.9583 1.875 17.2083 1.875 14.1666V7.08329C1.875 4.04163 3.625 2.29163 6.66667 2.29163H13.3333C16.375 2.29163 18.125 4.04163 18.125 7.08329V14.1666C18.125 17.2083 16.375 18.9583 13.3333 18.9583ZM6.66667 3.54163C4.28333 3.54163 3.125 4.69996 3.125 7.08329V14.1666C3.125 16.55 4.28333 17.7083 6.66667 17.7083H13.3333C15.7167 17.7083 16.875 16.55 16.875 14.1666V7.08329C16.875 4.69996 15.7167 3.54163 13.3333 3.54163H6.66667Z" fill="#525252" />
                                <path d="M7.08333 12.0833C6.975 12.0833 6.86666 12.0583 6.76666 12.0166C6.66666 11.975 6.57501 11.9166 6.49167 11.8416C6.41667 11.7583 6.35832 11.6666 6.31666 11.5666C6.27499 11.4666 6.25 11.3583 6.25 11.25C6.25 11.0333 6.34167 10.8166 6.49167 10.6583C6.57501 10.5833 6.66666 10.525 6.76666 10.4833C6.91666 10.4166 7.08334 10.4 7.25001 10.4333C7.30001 10.4416 7.35 10.4583 7.4 10.4833C7.45 10.5 7.5 10.525 7.55 10.5583C7.59166 10.5916 7.63333 10.625 7.67499 10.6583C7.70833 10.7 7.74999 10.7416 7.77499 10.7833C7.80832 10.8333 7.83334 10.8833 7.85001 10.9333C7.87501 10.9833 7.89168 11.0333 7.90001 11.0833C7.90834 11.1416 7.91667 11.1916 7.91667 11.25C7.91667 11.4666 7.82499 11.6833 7.67499 11.8416C7.51666 11.9916 7.3 12.0833 7.08333 12.0833Z" fill="#525252" />
                                <path d="M9.99996 12.0833C9.78329 12.0833 9.56663 11.9917 9.4083 11.8417C9.37497 11.8 9.34164 11.7583 9.3083 11.7167C9.27497 11.6667 9.24995 11.6167 9.23328 11.5667C9.20828 11.5167 9.19162 11.4667 9.18328 11.4167C9.17495 11.3584 9.16663 11.3083 9.16663 11.25C9.16663 11.1417 9.19161 11.0333 9.23328 10.9333C9.27495 10.8333 9.3333 10.7417 9.4083 10.6584C9.64163 10.425 10.0166 10.35 10.3166 10.4833C10.425 10.525 10.5083 10.5834 10.5916 10.6584C10.7416 10.8167 10.8333 11.0333 10.8333 11.25C10.8333 11.3083 10.825 11.3584 10.8166 11.4167C10.8083 11.4667 10.7916 11.5167 10.7666 11.5667C10.75 11.6167 10.7249 11.6667 10.6916 11.7167C10.6583 11.7583 10.625 11.8 10.5916 11.8417C10.5083 11.9167 10.425 11.975 10.3166 12.0167C10.2166 12.0584 10.1083 12.0833 9.99996 12.0833Z" fill="#525252" />
                                <path d="M7.08333 15C6.975 15 6.86666 14.975 6.76666 14.9333C6.66666 14.8917 6.57501 14.8333 6.49167 14.7583C6.41667 14.675 6.35832 14.5916 6.31666 14.4833C6.27499 14.3833 6.25 14.275 6.25 14.1666C6.25 13.95 6.34167 13.7333 6.49167 13.575C6.57501 13.5 6.66666 13.4416 6.76666 13.4C7.075 13.2666 7.44166 13.3416 7.67499 13.575C7.70833 13.6166 7.74999 13.6583 7.77499 13.7C7.80832 13.75 7.83334 13.8 7.85001 13.85C7.87501 13.9 7.89168 13.95 7.90001 14.0083C7.90834 14.0583 7.91667 14.1166 7.91667 14.1666C7.91667 14.3833 7.82499 14.6 7.67499 14.7583C7.51666 14.9083 7.3 15 7.08333 15Z" fill="#525252" />
                            </svg>
                            <span className='mt-[2px]'> 07 July - 09 Aug 2024</span>
                        </p>
                        <p className='text-[20px] font-semibold text-[#171717] mt-2'>Contribute to Disaster Relief to help rebuild lives and restore hope.</p>
                        <div className='flex gap-3 mt-5'>
                            <p className='text-[24px] font-medium text-[#171717]'>$384</p>
                            <p className='text-[16px] font-normal text-[#A3A3A3] mt-[6px]'>Raised of</p>
                            <p className='text-[16px] font-medium text-[#171717] mt-[6px]'>$1,870</p>
                        </div>
                        <p className='mt-4 mb-6'>
                            <svg className='lg:w-[336px] w-[302px]' width="336" height="6" viewBox="0 0 336 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="336" height="6" rx="3" fill="#068278" fill-opacity="0.12" />
                                <rect width="258" height="6" rx="3" fill="#068278" />
                            </svg>

                        </p>
                        <div className="card-actions mb-5">
                            <button className="bg-[#FFF] border-[#068278] border text-[#068278] hover:bg-[#068278] btn rounded-3xl w-full p-2 hover:text-white hover:border-0">
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
                {/* second card edit */}
                <div className="bg-[#FFF] shadow-md md:w-96 w-[330px] mx-auto rounded-3xl">
                    <figure className="px-3 pt-3">
                        <Image
                            src={donation_image_1}
                            alt=""
                            className="md:w-[360px] md:h-[251px] object-cover rounded-3xl" />
                    </figure>
                    <div className="ml-4 mr-4">
                        <p className='flex text-sm gap-1 mt-4 text-[#525252] font-normal '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.66663 4.79163C6.32496 4.79163 6.04163 4.50829 6.04163 4.16663V1.66663C6.04163 1.32496 6.32496 1.04163 6.66663 1.04163C7.00829 1.04163 7.29163 1.32496 7.29163 1.66663V4.16663C7.29163 4.50829 7.00829 4.79163 6.66663 4.79163Z" fill="#525252" />
                                <path d="M13.3334 4.79163C12.9917 4.79163 12.7084 4.50829 12.7084 4.16663V1.66663C12.7084 1.32496 12.9917 1.04163 13.3334 1.04163C13.675 1.04163 13.9584 1.32496 13.9584 1.66663V4.16663C13.9584 4.50829 13.675 4.79163 13.3334 4.79163Z" fill="#525252" />
                                <path d="M17.0833 8.19995H2.91663C2.57496 8.19995 2.29163 7.91662 2.29163 7.57495C2.29163 7.23328 2.57496 6.94995 2.91663 6.94995H17.0833C17.425 6.94995 17.7083 7.23328 17.7083 7.57495C17.7083 7.91662 17.425 8.19995 17.0833 8.19995Z" fill="#525252" />
                                <path d="M13.3333 18.9583H6.66667C3.625 18.9583 1.875 17.2083 1.875 14.1666V7.08329C1.875 4.04163 3.625 2.29163 6.66667 2.29163H13.3333C16.375 2.29163 18.125 4.04163 18.125 7.08329V14.1666C18.125 17.2083 16.375 18.9583 13.3333 18.9583ZM6.66667 3.54163C4.28333 3.54163 3.125 4.69996 3.125 7.08329V14.1666C3.125 16.55 4.28333 17.7083 6.66667 17.7083H13.3333C15.7167 17.7083 16.875 16.55 16.875 14.1666V7.08329C16.875 4.69996 15.7167 3.54163 13.3333 3.54163H6.66667Z" fill="#525252" />
                                <path d="M7.08333 12.0833C6.975 12.0833 6.86666 12.0583 6.76666 12.0166C6.66666 11.975 6.57501 11.9166 6.49167 11.8416C6.41667 11.7583 6.35832 11.6666 6.31666 11.5666C6.27499 11.4666 6.25 11.3583 6.25 11.25C6.25 11.0333 6.34167 10.8166 6.49167 10.6583C6.57501 10.5833 6.66666 10.525 6.76666 10.4833C6.91666 10.4166 7.08334 10.4 7.25001 10.4333C7.30001 10.4416 7.35 10.4583 7.4 10.4833C7.45 10.5 7.5 10.525 7.55 10.5583C7.59166 10.5916 7.63333 10.625 7.67499 10.6583C7.70833 10.7 7.74999 10.7416 7.77499 10.7833C7.80832 10.8333 7.83334 10.8833 7.85001 10.9333C7.87501 10.9833 7.89168 11.0333 7.90001 11.0833C7.90834 11.1416 7.91667 11.1916 7.91667 11.25C7.91667 11.4666 7.82499 11.6833 7.67499 11.8416C7.51666 11.9916 7.3 12.0833 7.08333 12.0833Z" fill="#525252" />
                                <path d="M9.99996 12.0833C9.78329 12.0833 9.56663 11.9917 9.4083 11.8417C9.37497 11.8 9.34164 11.7583 9.3083 11.7167C9.27497 11.6667 9.24995 11.6167 9.23328 11.5667C9.20828 11.5167 9.19162 11.4667 9.18328 11.4167C9.17495 11.3584 9.16663 11.3083 9.16663 11.25C9.16663 11.1417 9.19161 11.0333 9.23328 10.9333C9.27495 10.8333 9.3333 10.7417 9.4083 10.6584C9.64163 10.425 10.0166 10.35 10.3166 10.4833C10.425 10.525 10.5083 10.5834 10.5916 10.6584C10.7416 10.8167 10.8333 11.0333 10.8333 11.25C10.8333 11.3083 10.825 11.3584 10.8166 11.4167C10.8083 11.4667 10.7916 11.5167 10.7666 11.5667C10.75 11.6167 10.7249 11.6667 10.6916 11.7167C10.6583 11.7583 10.625 11.8 10.5916 11.8417C10.5083 11.9167 10.425 11.975 10.3166 12.0167C10.2166 12.0584 10.1083 12.0833 9.99996 12.0833Z" fill="#525252" />
                                <path d="M7.08333 15C6.975 15 6.86666 14.975 6.76666 14.9333C6.66666 14.8917 6.57501 14.8333 6.49167 14.7583C6.41667 14.675 6.35832 14.5916 6.31666 14.4833C6.27499 14.3833 6.25 14.275 6.25 14.1666C6.25 13.95 6.34167 13.7333 6.49167 13.575C6.57501 13.5 6.66666 13.4416 6.76666 13.4C7.075 13.2666 7.44166 13.3416 7.67499 13.575C7.70833 13.6166 7.74999 13.6583 7.77499 13.7C7.80832 13.75 7.83334 13.8 7.85001 13.85C7.87501 13.9 7.89168 13.95 7.90001 14.0083C7.90834 14.0583 7.91667 14.1166 7.91667 14.1666C7.91667 14.3833 7.82499 14.6 7.67499 14.7583C7.51666 14.9083 7.3 15 7.08333 15Z" fill="#525252" />
                            </svg>
                            <span className='mt-[2px]'> 09 Aug - 11 Sep 2024</span>
                        </p>
                        <p className='text-[20px] font-semibold text-[#171717] mt-2'>Join us in raising money to make a lasting difference for</p>
                        <div className='flex gap-3 mt-5'>
                            <p className='text-[24px] font-medium text-[#171717]'>$2.105</p>
                            <p className='text-[16px] font-normal text-[#A3A3A3] mt-[6px]'>Raised of</p>
                            <p className='text-[16px] font-medium text-[#171717] mt-[6px]'>$3,981</p>
                        </div>
                        <p className='mt-4 mb-6'>
                            <svg className='lg:w-[336px] w-[302px]' width="336" height="6" viewBox="0 0 336 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="336" height="6" rx="3" fill="#068278" fill-opacity="0.12" />
                                <rect width="123" height="6" rx="3" fill="#068278" />
                            </svg>
                        </p>
                        <div className="card-actions mb-5">
                            <button className="bg-[#FFF] border-[#068278] border text-[#068278] hover:bg-[#068278] btn rounded-3xl w-full p-2 hover:text-white hover:border-0">
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
                {/* third card edit */}
                <div className="bg-[#FFF] shadow-md md:w-96 w-[330px] mx-auto rounded-3xl">
                    <figure className="px-3 pt-3">
                        <Image
                            src={donation_image_3}
                            alt=""
                            className="md:w-[360px] md:h-[251px] object-cover rounded-3xl" />
                    </figure>
                    <div className="ml-4 mr-4">
                        <p className='flex text-sm gap-1 mt-4 text-[#525252] font-normal '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.66663 4.79163C6.32496 4.79163 6.04163 4.50829 6.04163 4.16663V1.66663C6.04163 1.32496 6.32496 1.04163 6.66663 1.04163C7.00829 1.04163 7.29163 1.32496 7.29163 1.66663V4.16663C7.29163 4.50829 7.00829 4.79163 6.66663 4.79163Z" fill="#525252" />
                                <path d="M13.3334 4.79163C12.9917 4.79163 12.7084 4.50829 12.7084 4.16663V1.66663C12.7084 1.32496 12.9917 1.04163 13.3334 1.04163C13.675 1.04163 13.9584 1.32496 13.9584 1.66663V4.16663C13.9584 4.50829 13.675 4.79163 13.3334 4.79163Z" fill="#525252" />
                                <path d="M17.0833 8.19995H2.91663C2.57496 8.19995 2.29163 7.91662 2.29163 7.57495C2.29163 7.23328 2.57496 6.94995 2.91663 6.94995H17.0833C17.425 6.94995 17.7083 7.23328 17.7083 7.57495C17.7083 7.91662 17.425 8.19995 17.0833 8.19995Z" fill="#525252" />
                                <path d="M13.3333 18.9583H6.66667C3.625 18.9583 1.875 17.2083 1.875 14.1666V7.08329C1.875 4.04163 3.625 2.29163 6.66667 2.29163H13.3333C16.375 2.29163 18.125 4.04163 18.125 7.08329V14.1666C18.125 17.2083 16.375 18.9583 13.3333 18.9583ZM6.66667 3.54163C4.28333 3.54163 3.125 4.69996 3.125 7.08329V14.1666C3.125 16.55 4.28333 17.7083 6.66667 17.7083H13.3333C15.7167 17.7083 16.875 16.55 16.875 14.1666V7.08329C16.875 4.69996 15.7167 3.54163 13.3333 3.54163H6.66667Z" fill="#525252" />
                                <path d="M7.08333 12.0833C6.975 12.0833 6.86666 12.0583 6.76666 12.0166C6.66666 11.975 6.57501 11.9166 6.49167 11.8416C6.41667 11.7583 6.35832 11.6666 6.31666 11.5666C6.27499 11.4666 6.25 11.3583 6.25 11.25C6.25 11.0333 6.34167 10.8166 6.49167 10.6583C6.57501 10.5833 6.66666 10.525 6.76666 10.4833C6.91666 10.4166 7.08334 10.4 7.25001 10.4333C7.30001 10.4416 7.35 10.4583 7.4 10.4833C7.45 10.5 7.5 10.525 7.55 10.5583C7.59166 10.5916 7.63333 10.625 7.67499 10.6583C7.70833 10.7 7.74999 10.7416 7.77499 10.7833C7.80832 10.8333 7.83334 10.8833 7.85001 10.9333C7.87501 10.9833 7.89168 11.0333 7.90001 11.0833C7.90834 11.1416 7.91667 11.1916 7.91667 11.25C7.91667 11.4666 7.82499 11.6833 7.67499 11.8416C7.51666 11.9916 7.3 12.0833 7.08333 12.0833Z" fill="#525252" />
                                <path d="M9.99996 12.0833C9.78329 12.0833 9.56663 11.9917 9.4083 11.8417C9.37497 11.8 9.34164 11.7583 9.3083 11.7167C9.27497 11.6667 9.24995 11.6167 9.23328 11.5667C9.20828 11.5167 9.19162 11.4667 9.18328 11.4167C9.17495 11.3584 9.16663 11.3083 9.16663 11.25C9.16663 11.1417 9.19161 11.0333 9.23328 10.9333C9.27495 10.8333 9.3333 10.7417 9.4083 10.6584C9.64163 10.425 10.0166 10.35 10.3166 10.4833C10.425 10.525 10.5083 10.5834 10.5916 10.6584C10.7416 10.8167 10.8333 11.0333 10.8333 11.25C10.8333 11.3083 10.825 11.3584 10.8166 11.4167C10.8083 11.4667 10.7916 11.5167 10.7666 11.5667C10.75 11.6167 10.7249 11.6667 10.6916 11.7167C10.6583 11.7583 10.625 11.8 10.5916 11.8417C10.5083 11.9167 10.425 11.975 10.3166 12.0167C10.2166 12.0584 10.1083 12.0833 9.99996 12.0833Z" fill="#525252" />
                                <path d="M7.08333 15C6.975 15 6.86666 14.975 6.76666 14.9333C6.66666 14.8917 6.57501 14.8333 6.49167 14.7583C6.41667 14.675 6.35832 14.5916 6.31666 14.4833C6.27499 14.3833 6.25 14.275 6.25 14.1666C6.25 13.95 6.34167 13.7333 6.49167 13.575C6.57501 13.5 6.66666 13.4416 6.76666 13.4C7.075 13.2666 7.44166 13.3416 7.67499 13.575C7.70833 13.6166 7.74999 13.6583 7.77499 13.7C7.80832 13.75 7.83334 13.8 7.85001 13.85C7.87501 13.9 7.89168 13.95 7.90001 14.0083C7.90834 14.0583 7.91667 14.1166 7.91667 14.1666C7.91667 14.3833 7.82499 14.6 7.67499 14.7583C7.51666 14.9083 7.3 15 7.08333 15Z" fill="#525252" />
                            </svg>
                            <span className='mt-[2px]'> 25 Sep - 30 Nov 2024</span>
                        </p>
                        <p className='text-[20px] font-semibold text-[#171717] mt-2'>Make a donation to our fundraising drive to help us change lives.</p>
                        <div className='flex gap-3 mt-5'>
                            <p className='text-[24px] font-medium text-[#171717]'>$880</p>
                            <p className='text-[16px] font-normal text-[#A3A3A3] mt-[6px]'>Raised of</p>
                            <p className='text-[16px] font-medium text-[#171717] mt-[6px]'>$1.173</p>
                        </div>
                        <p className='mt-4 mb-6'>
                            <svg className='lg:w-[336px] w-[302px]' width="336" height="6" viewBox="0 0 336 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="336" height="6" rx="3" fill="#068278" fill-opacity="0.12" />
                                <rect width="208.133" height="6" rx="3" fill="#068278" />
                            </svg>
                        </p>
                        <div className="card-actions mb-5">
                            <button className="bg-[#FFF] border-[#068278] border text-[#068278] hover:bg-[#068278] btn rounded-3xl w-full p-2 hover:text-white hover:border-0">
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 text-center mb-[60px]'>
                <button className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-12 py-4 hover:text-[#068278] border-0">
                    View all
                </button>
            </div>
        </div>
    );
};

export default Donation;