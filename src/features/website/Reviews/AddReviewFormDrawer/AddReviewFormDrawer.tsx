import PopUpShell from '@/shared/components/PopUpShell/PopUpShell';

import { AddReviewButton } from '../AddReviewButton';
import AddReviewForm from '../AddReviewForm/AddReviewForm';

export default function AddReviewFormDrawer() {
    return (
        <PopUpShell withCloseButton CustomButton={AddReviewButton}>
            <AddReviewForm />
        </PopUpShell>
    );
}
