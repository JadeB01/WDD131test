const gallery = document.querySelector('.gallery');
        const modal = document.querySelector('dialog');
        const modalImage = modal.querySelector('img');
        const closeButton = modal.querySelector('.close-viewer');

        gallery.addEventListener('click', openModal);

        function openModal(event) {
            console.log(event.target);
            let imageSrc = event.target.src;
            modalImage.src = imageSrc.replace("-sm.jpg", "-full.jpg");
            modal.showModal();
        }

        closeButton.addEventListener('click', () => {
            modal.close();
        })

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.close();
            }
        })

        document.addEventListener('keydown', (event) => {

            if (event.key === 'Escape') {

                modal.close();
            }

        });

