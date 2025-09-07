import { Flex } from '@mantine/core';

import ContactDetail from '@/shared/components/ContactDetail';
import { formatPhoneNumber } from '@/shared/lib/formatPhoneNumber';
// import styles from '@/entities/website/Footer/styles/website-footer.module.css';
import styles from '@/entities/website/Footer/styles/website-footer.module.css';
import Clock from '@/shared/ui/icons/ClockIcon';
import MapPinIcon from '@/shared/ui/icons/MapPinIcon';
import PhoneIcon from '@/shared/ui/icons/PhoneIcon';

const contacts = [
    {
        icon: <PhoneIcon />,
        contactInfo: ['+380637476963', '+380679954177'].map(formatPhoneNumber),
    },
    {
        icon: <MapPinIcon />,
        contactInfo: [
            'Київська обл., Бориспілський р-н,',
            'с.Гора, Провулок Гірський, 7',
        ],
    },
    {
        icon: <Clock />,
        contactInfo: ['Пн, Ср, Пт, Сб, Нд: 10:00-19:00', 'Вт, Чт: вихідні'],
    },
];

export default function FooterContacts() {
    return (
        <Flex className={styles.footerContacts}>
            {contacts.map(({ icon, contactInfo }, index) => (
                <ContactDetail
                    key={index}
                    icon={icon}
                    contactInfo={contactInfo}
                />
            ))}
        </Flex>
    );
}
